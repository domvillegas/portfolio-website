import React, { useEffect } from "react";
import MenuButton from "@/components/MenuButton/MenuButton";
import styles from './index.module.scss'

const Projects = () => {
  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("fadeIn");
    body.classList.remove("fadeOut");

    setTimeout(() => {
      body.classList.remove("fadeIn");
    }, 500);
  });

  return (
    <div className={styles.projects}>
      <h2>under construction lol</h2>
      <MenuButton />
    </div>
  );
};

export default Projects;
