import MenuButton from "@/components/MenuButton/MenuButton";
import React, { useEffect } from "react";
import styles from "./playground.module.scss";
import { useRouter } from "next/router";
import { pushRouteWithFade } from "@/utils/helpers";

const projects = [{ name: "taproom", link: "/taproom" }];

const Playground = () => {
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
    <div className={styles.playground}>
      <div className={styles.projectsList}>
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className={styles.projectLink}
              onClick={() =>
                pushRouteWithFade(`/playground/${project.name}`, route)
              }
            >
              {project.name}
            </div>
          );
        })}
      </div>
      <MenuButton />
    </div>
  );
};

export default Playground;
