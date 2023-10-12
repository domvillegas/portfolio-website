import React, { useEffect, useState } from "react";
import styles from "./Field.module.scss";
import Stars from "./components/Stars";
import Modal from "@/components/Modal/Modal";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "@/APIs/field";
import { Star } from "@/utils/types";

const Field = () => {
  const [summoned, setSummoned] = useState(false);
  const [summonedClicked, setSummonedClicked] = useState(false);
  const [stars, setStars] = useState<[] | Star[]>([]);
  const [selectedStar, setSelectedStar] = useState<{} | Star>([]);
  const [starName, setStarName] = useState("");
  const [starDescription, setStarDescription] = useState("");

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("fadeIn");
    body.classList.remove("fadeOut");

    setTimeout(() => {
      body.classList.remove("fadeIn");
    }, 500);
  }, []);

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

    try {
      setSelectedStar(starDocument as unknown as Star);
    } catch (error) {
      console.error(error);
    }
  };

  const modalContent = (
    <div className={styles.starForm}>
      <form>
        {(selectedStar as Star).name ? (
          <span>{(selectedStar as Star).name}</span>
        ) : (
          <input
            type="name"
            placeholder="Star Name"
            onChange={(event) => setStarName(event.target.value)}
          />
        )}
        {(selectedStar as Star).note ? (
          <span>{(selectedStar as Star).note}</span>
        ) : (
          <input
            type="text"
            placeholder="Star Description"
            onChange={(event) => setStarDescription(event.target.value)}
          />
        )}

        <button type="submit">
          {(selectedStar as Star).editTime ? "Alter" : "Claim"}
        </button>
      </form>
    </div>
  );

  return (
    <div className={styles.field}>
      {summoned ? (
        <>
          <Stars action={starClickHandler} data={stars} />
          <Modal
            markup={modalContent}
            visible={(selectedStar as any).id ? true : false}
            close={() => setSelectedStar([])}
            data={selectedStar}
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
