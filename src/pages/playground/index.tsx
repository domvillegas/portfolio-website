import MenuButton from "@/components/MenuButton/MenuButton";
import React, { useEffect } from "react";
import styles from "./playground.module.scss";
import { useRouter } from "next/router";
import { pushRouteWithFade } from "@/utils/helpers";

const projects = [
  { name: "taproom", link: "taproom" },
  { name: "the grid", link: "the-grid" },
];

const projectsOrdered = projects.sort((projectA, projectB) => {
  return projectA.name.length - projectB.name.length;
});

const Playground = () => {
  const route = useRouter();

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("fadeIn");
    body.classList.remove("fadeOut");
    body.style.overflow = "hidden";

    setTimeout(() => {
      body.classList.remove("fadeIn");
    }, 500);
  });

  //YOU NEED TO LINK BACK TO THE PLAYGROUND, NOT THE MENU BECAUSE YOU'RE CHANDING THE BODY'S OVERFLOW STYLES
  //YOU NEED TO LINK BACK TO THE PLAYGROUND, NOT THE MENU BECAUSE YOU'RE CHANDING THE BODY'S OVERFLOW STYLES
  //YOU NEED TO LINK BACK TO THE PLAYGROUND, NOT THE MENU BECAUSE YOU'RE CHANDING THE BODY'S OVERFLOW STYLES
  //YOU NEED TO LINK BACK TO THE PLAYGROUND, NOT THE MENU BECAUSE YOU'RE CHANDING THE BODY'S OVERFLOW STYLES
  //YOU NEED TO LINK BACK TO THE PLAYGROUND, NOT THE MENU BECAUSE YOU'RE CHANDING THE BODY'S OVERFLOW STYLES

  return (
    <div className={styles.playground}>
      <div className={styles.projectsList}>
        {projectsOrdered.map((project, index) => {
          return (
            <div
              key={index}
              className={styles.projectLink}
              onClick={() =>
                pushRouteWithFade(`/playground/${project.link}`, route)
              }
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

export default Playground;
