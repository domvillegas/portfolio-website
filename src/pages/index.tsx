import React, { useEffect } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";

const Home = () => {
  const route = useRouter();

  useEffect(() => {
    const pageContainer = document.getElementsByClassName("fadeIn")[0];

    setTimeout(() => {
      pageContainer.classList.remove("fadeIn");
    }, 1500);
  });

  return (
    <div className={`${styles.home} fadeIn`}>
      <div className={styles.contentContainer}>
        <h1 className={styles.domText}>dom</h1>
        <h1 className={styles.enterText} onClick={() => route.push("/menu")}>
          enter
        </h1>
      </div>
    </div>
  );
};

export default Home;
