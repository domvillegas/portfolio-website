import React, { useEffect, useState } from "react";
import styles from "./Field.module.scss";
import Stars from "./components/Stars";
import Modal from "@/components/Modal/Modal";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/APIs/field";
import { Star } from "@/utils/types";
import { pushRouteWithFade } from "@/utils/helpers";
import { useRouter } from "next/router";

const Field = () => {
  const [summoned, setSummoned] = useState(false);
  const [summonedClicked, setSummonedClicked] = useState(false);
  const [stars, setStars] = useState<[] | Star[]>([]);
  const [selectedStar, setSelectedStar] = useState<null | Star>(null);
  const [starName, setStarName] = useState("");
  const [starDescription, setStarDescription] = useState("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [introModalOpen, setIntroModalOpen] = useState<boolean>(false);

  const route = useRouter();

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("fadeIn");
    body.classList.remove("fadeOut");
    setIntroModalOpen(true);

    body.firstChild?.firstChild?.addEventListener("dblclick", () => {
      pushRouteWithFade("/playground", route);
    });

    setTimeout(() => {
      body.classList.remove("fadeIn");
    }, 500);
  }, [route]);

  useEffect(() => {
    const getStarData = async () => {
      try {
        const starsData = await getDocs(collection(db, "stars"));
        const processedStarsData = starsData.docs.map((star) => ({
          ...star.data(),
          id: star.id,
        }));
        setStars(processedStarsData as Star[]);
      } catch (error) {
        console.error(error);
      }
    };

    getStarData();
  }, []);

  const summonHandler = () => {
    setSummonedClicked(true);
    setTimeout(() => {
      setSummoned(true);
    }, 750);
  };

  const starClickHandler = async (starId: string) => {
    const starReference = doc(db, "stars", starId);
    const starDocument = await getDoc(starReference);
    setModalOpen(true);

    try {
      setSelectedStar(starDocument.data() as Star);
    } catch (error) {
      console.error(error);
    }
  };

  const updateStar = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    starId: Star["id"]
  ) => {
    event.preventDefault();

    const starReference = doc(db, "stars", starId);

    updateDoc(starReference, {
      name: starName,
      note: starDescription,
      editTime: new Date(),
    });

    setModalOpen(false);
  };

  const modalContent = (
    <div className={styles.starForm}>
      <form>
        {(selectedStar as Star)?.name ? (
          <div className={styles.claimedModalField}>
            <span>Name: </span>
            <br />
            <input placeholder={(selectedStar as Star)?.name} />
          </div>
        ) : (
          <input
            type="name"
            placeholder="Star Name"
            onChange={(event) => setStarName(event.target.value)}
          />
        )}
        {(selectedStar as Star)?.note ? (
          <div className={styles.claimedModalField}>
            <span>Description: </span>
            <br />
            <input placeholder={(selectedStar as Star)?.note} />
          </div>
        ) : (
          <input
            type="text"
            placeholder="Star Description"
            onChange={(event) => setStarDescription(event.target.value)}
          />
        )}
        <button
          type="submit"
          onClick={(event) => updateStar(event, (selectedStar as Star).id)}
        >
          {(selectedStar as Star)?.editTime ? "Alter" : "Claim"}
        </button>
        {(selectedStar as Star)?.editTime && (
          <div className={styles.lastEdited}>
            <span>Last Edited: </span>
            <br />
            <span>{`${new Date(
              (selectedStar as Star).editTime.seconds * 1000
            )}`}</span>
          </div>
        )}
      </form>
    </div>
  );

  const introModal = (
    <div className={styles.introModalContent}>
      <span>Welcome to "Field"</span>
      <span>
        I made this to practice some animation ideas and to learn how to use
        Firebase.
      </span>
      <span>Here's some guidance 👇</span>
      <ol>
        <li>
          If at any point you feel uncomfortable double tap or double click to
          eject from the experience.
        </li>
        <li>Have fun or just leave a note or something. Say hello? 🥹</li>
        <li>
          I'm cheap so we can only generate 13,000 objects per day. If objects
          aren't being generated it's because we've collectively reached our
          quota.
        </li>
        <li>
          The experience is way better on laptops and desktops, but works
          decently on phones and tablets.
        </li>
        <li>Good luck.</li>
      </ol>
      <div className={styles.introModalButtonWrap}>
        <button onClick={() => setIntroModalOpen(false)}>Begin</button>
      </div>
    </div>
  );

  return (
    <div className={styles.field}>
      <Modal
        markup={introModal}
        visible={introModalOpen}
        close={() => setIntroModalOpen(false)}
      />
      {summoned ? (
        <>
          <Stars action={starClickHandler} data={stars} />
          <Modal
            markup={modalContent}
            visible={modalOpen}
            close={() => setModalOpen(false)}
          />
        </>
      ) : (
        <div
          className={`${styles.buttonContainer} ${
            summonedClicked ? styles.buttonFade : ""
          }`}
        >
          <button type="button" onClick={summonHandler}>
            <h1>summon</h1>
          </button>
        </div>
      )}

      {/* these buttons will allow the user to highlight specific categories of stars.
      "Highlight" really means make the non-selected stars invisible */}
      {/* <button>claimed</button>
      <button>unclaimed</button> */}
    </div>
  );
};

export default Field;
