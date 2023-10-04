import React, { useEffect } from "react";
import MenuButton from "@/components/MenuButton/MenuButton";
import styles from "./index.module.scss";
import { pushRouteWithFade } from "@/utils/helpers";
import { useRouter } from "next/router";

const projects = [
  { name: "tdp.com", link: "", targetBlank: true },
  {
    name: "@100.11101",
    link: "https://www.instagram.com/100.11101/",
    targetBlank: true,
  },
  { name: "/playground", link: "/playground", targetBlank: false },
];

const projectsOrdered = projects.sort((projectA, projectB) => {
  return projectA.name.length - projectB.name.length;
});

const Projects = () => {
  const route = useRouter();

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
            <div
              className={styles.projectLink}
              onClick={() => {
                if (project.targetBlank) {
                  window.open(project.link, "_blank");
                } else {
                  pushRouteWithFade(project.link, route);
                }
              }}
              key={index}
            >
              {project.name}
            </div>
          );
        })}
      </div>

      <MenuButton className={styles.menuButton} />
    </div>
  );
};

export default Projects;
