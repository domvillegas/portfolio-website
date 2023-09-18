import React from "react";
import styles from "./index.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.contentContainer}>
        <h1 className={styles.domText}>dom</h1>
        <h1 className={styles.enterText}>enter</h1>
      </div>
    </div>
  );
};

export default Home;
