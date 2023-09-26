import React from "react";
import styles from "./Stars.module.scss";

const starCount = 200;

const Star = () => {
  return Array.from(Array(starCount)).map((_, index) => {
    return (
      <div
        onClick={() => window.alert(`Star ${index}`)}
        className={styles.star}
        key={index}
        style={{
          position: "fixed",
          //   could add Math.floor to both of these values to create a grid
          top: `${Math.random() * 101}%`,
          left: `${Math.random() * 101}%`,
        }}
      >
        <div
          style={{ animationDelay: `${5 + (index * 0.025)}s` }}
          className={`${styles.objectContainer} ${styles.twinkle}`}
        >
          <div
            style={{ animationDelay: `${index * 0.025}s` }}
            className={`${styles.object} ${
              index % 2
                ? `${styles.objectA} ${styles.rotateSquish}`
                : styles.objectB
            } ${styles.rotateSquish}`}
          />
        </div>
      </div>
    );
  });
};

export default Star;
