import React from "react";
import styles from "./Stars.module.scss";
import { starsPositions } from "../starsPositions";

interface Props {
  action: () => void;
}

const Stars = ({ action }: Props) => {
  return (
    <div className={styles.stars}>
      {starsPositions.map((starPosition, index) => {
        return (
          <div
            onClick={action}
            className={styles.star}
            key={index}
            style={{
              position: "fixed",
              top: starPosition.top,
              left: starPosition.left,
            }}
          >
            <div
              style={{ animationDelay: `${5 + index * 0.025}s` }}
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
      })}
    </div>
  );
};

export default Stars;
