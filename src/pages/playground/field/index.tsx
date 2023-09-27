import React, { useState } from "react";
import styles from "./Field.module.scss";
import Stars from "./components/Stars";

const Field = () => {
  const [summoned, setSummoned] = useState(false);

  return (
    <div className={styles.field}>
      {summoned && <Stars />}
      {!summoned && (
        <button type="button" onClick={() => setSummoned(true)}>
          open
        </button>
      )}
      {/* these buttons will allow the user to highlight specific categories of stars.
      "Highlight" really means make the non-selected stars invisible */}
      {/* <button>claimed</button>
      <button>unclaimed</button> */}
    </div>
  );
};

export default Field;
