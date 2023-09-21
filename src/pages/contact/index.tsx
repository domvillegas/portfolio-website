import React, { useEffect } from "react";
import MenuButton from "@/components/MenuButton/MenuButton";
import styles from "./index.module.scss";

const Contact = () => {
  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("fadeIn");
    body.classList.remove("fadeOut");

    setTimeout(() => {
      body.classList.remove("fadeIn");
    }, 500);
  });

  return (
    <div className={styles.contact}>
      <div>
        {" "}
        <span>villegasdominick@gmail.com</span>{" "}
        <i
          className="far fa-paper-plane"
          onClick={() => (location.href = "mailto:villegasdominick@gmail.com")}
        />
      </div>

      <MenuButton className={styles.menuButton} />
    </div>
  );
};

export default Contact;
