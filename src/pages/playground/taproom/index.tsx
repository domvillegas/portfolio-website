import React, { useState, useRef, useEffect } from "react";
import TouchGlow from "@/components/TouchGlow/TouchGlow";
import styles from "./taproom.module.scss";
import { useTopLeftValues } from "@/contexts/useTopLeftValues";
import { useRouter } from "next/router";
import { pushRouteWithFade } from "@/utils/helpers";

const Taproom = () => {
  const [tapCounter, setTapCounter] = useState(0);
  const [hadEnoughPosition, setHadEnoughPosition] = useState({
    top: "0%",
    left: "0%",
  });

  const route = useRouter();

  const { values } = useTopLeftValues();

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("fadeIn");
    body.classList.remove("fadeOut");

    setTimeout(() => {
      body.classList.remove("fadeIn");
    }, 500);
  }, []);

  useEffect(() => {
    if (tapCounter === 5) {
      setHadEnoughPosition({ top: values.top, left: values.left });
    }

    if (tapCounter === 13) {
      setTimeout(() => {
        pushRouteWithFade("/playground", route);
      }, 3500);
    }
  }, [tapCounter]);

  //The tap Handler's name is Sierra. She's very cute.
  const tapHandler = () => {
    setTapCounter(tapCounter + 1);
  };

  //y'know... if you double tap you'll turn the lights on in here

  //every time the lights turn on, a random image is selected from google and displayed

  return (
    <div className={styles.taproom} onClick={tapHandler}>
      <TouchGlow />
      <h1>taproom</h1>
      {tapCounter >= 5 && (
        <h2
          style={{
            top: `${
              hadEnoughPosition.top !== "0%" && tapCounter <= 7
                ? hadEnoughPosition.top
                : values.top
            }`,
            left: `${
              hadEnoughPosition.left !== "0%" && tapCounter <= 7
                ? hadEnoughPosition.left
                : values.left
            }`,
          }}
        >
          {tapCounter > 7 && tapCounter < 13
            ? "Hey!"
            : tapCounter <= 10 && "I think you've had enough."}
          {tapCounter >= 13 ? "Alright, buddy. You've gotta go." : ""}
        </h2>
      )}
    </div>
  );
};

export default Taproom;
