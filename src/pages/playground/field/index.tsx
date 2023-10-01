import React, { useState } from "react";
import styles from "./Field.module.scss";
import Stars from "./components/Stars";
import Modal from "@/components/Modal/Modal";

const Field = () => {
  const [summoned, setSummoned] = useState(false);
  const [summonedClicked, setSummonedClicked] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const summonHandler = () => {
    setSummonedClicked(true);
    setTimeout(() => {
      setSummoned(true);
    }, 750);
  };

  return (
    <div className={styles.field}>
      {summoned ? (
        <>
          <Stars action={() => setModalIsOpen(true)} />
          <Modal visible={modalIsOpen} close={() => setModalIsOpen(false)} />
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
