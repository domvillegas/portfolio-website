import React, { useState, useRef, useEffect } from "react";
import TouchGlow from "@/components/TouchGlow/TouchGlow";
import styles from "./taproom.module.scss";
import { useTopLeftValues } from "@/contexts/useTopLeftValues";

const Taproom = () => {
  const [tapCounter, setTapCounter] = useState(0);
  const [hadEnoughPosition, setHadEnoughPosition] = useState({
    top: "0%",
    left: "0%",
  });

  const { values } = useTopLeftValues();

  console.log(values);

  //The tap Handler's name is Sierra. She's very cute.
  const tapHandler = () => {
    setTapCounter(tapCounter + 1);
  };

  useEffect(() => {
    if (tapCounter === 5) {
      setHadEnoughPosition({ top: values.top, left: values.left });
    }
  }, [tapCounter]);

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
          {tapCounter > 7 ? "Hey!" : "I think you've had enough."}
        </h2>
      )}
    </div>
  );
};

export default Taproom;
