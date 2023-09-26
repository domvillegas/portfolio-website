import React, { useState } from "react";
import styles from "./Field.module.scss";
import Star from "./components/Stars";

const Field = () => {
  const [summoned, setSummoned] = useState(false);

  return (
    <div className={styles.field}>
      {summoned && <Star />}
      {!summoned && (
        <button type="button" onClick={() => setSummoned(true)}>
          open
        </button>
      )}
    </div>
  );
};

export default Field;
