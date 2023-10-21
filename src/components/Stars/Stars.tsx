import React from "react";
import styles from "./Stars.module.scss";
import { Star } from "@/utils/types";

interface Props {
  action: (id: string) => void;
  data: Star[];
}

const Stars = ({ action, data }: Props) => {
  return (
    <div className={styles.stars}>
      {data.map((star, index) => {
        return (
          <div
            onClick={() => action(star.id)}
            className={styles.star}
            key={index}
            style={{
              position: "fixed",
              top: star.position.y,
              left: star.position.x,
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
