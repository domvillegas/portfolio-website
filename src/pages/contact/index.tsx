import React, { useEffect } from "react";
import MenuButton from "@/components/MenuButton/MenuButton";
import styles from './index.module.scss'

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
      <span>villegasdominick@gmail.com</span>
      <MenuButton />
    </div>
  );
};

export default Contact;
