import React, { useState, MouseEvent } from "react";
import styles from "./TouchGlow.module.scss";
import { useTopLeftValues } from "@/contexts/useTopLeftValues";

const TouchGlow = () => {
  const [touched, setTouched] = useState(false);

  const { values, setValues } = useTopLeftValues();

  const expansionHandler = () => {
    setTouched(true);

    setTimeout(() => {
      setTouched(false);
    }, 250);
  };

  const touchHandler = (event: MouseEvent<HTMLDivElement>) => {
    const xPercentage = (event.clientX / window.innerWidth) * 100;
    const yPercentage = (event.clientY / window.innerHeight) * 100;

    setValues({ top: `${yPercentage}%`, left: `${xPercentage}%` });

    expansionHandler();
  };

  return (
    <div onClick={(event) => touchHandler(event)} className={styles.touchGlow}>
      <div
        className={`${styles.glow} ${touched ? styles.expand : ""} `}
        style={{ top: values.top, left: values.left }}
      />
    </div>
  );
};

export default TouchGlow;
