import React from "react";
import styles from "./404.module.scss";
import MenuButton from "@/components/MenuButton/MenuButton";

const Custom404 = () => {
  return (
    <div className={styles.custom404}>
      <h2>
        You've found a part of the website that doesn't exist, but you're
        here...so it kind of exists, right?
      </h2>
      <MenuButton />
    </div>
  );
};

export default Custom404;
