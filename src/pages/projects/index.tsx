import React, { useEffect } from "react";
import MenuButton from "@/components/MenuButton/MenuButton";
import styles from "./index.module.scss";

const projects = [
  { name: "tdp.com", link: "" },
  { name: "equitymultiple.com", link: "https://equitymultiple.com/" },
  { name: "@100.11101", link: "https://www.instagram.com/100.11101/" },
];

const projectsOrdered = projects.sort((projectA, projectB) => {
  return projectA.name.length - projectB.name.length;
});

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
      <div className={styles.projectsList}>
        {projectsOrdered.map((project, index) => {
          return (
            <a key={index} href={project.link} target="_blank">
              {project.name}
            </a>
          );
        })}
      </div>

      <MenuButton className={styles.menuButton} />
    </div>
  );
};

export default Projects;
