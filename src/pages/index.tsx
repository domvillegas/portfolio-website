import React, { useEffect } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { pushRouteWithFade } from "@/utils/helpers";

const Home = () => {
  const route = useRouter();

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("fadeIn");

    setTimeout(() => {
      body.classList.remove("fadeOut");
      body.classList.remove("fadeIn");
    }, 500);
  });

  return (
    <div className={`${styles.home} fadeIn`}>
      <div className={styles.contentContainer}>
        <h1 className={styles.domText}>dom</h1>
        <h1
          className={styles.enterText}
          onClick={() => pushRouteWithFade("/menu", route)}
        >
          enter
        </h1>
      </div>
    </div>
  );
};

export default Home;
