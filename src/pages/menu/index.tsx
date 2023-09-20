import React, { useEffect } from "react";
import { pushRouteWithFade } from "@/utils/helpers";
import { useRouter } from "next/router";
import styles from "./index.module.scss";

const menuItems = [
  { text: "about", path: "/about" },
  { text: "projects", path: "/projects" },
  { text: "contact", path: "/contact" },
];

const Menu = () => {
  const route = useRouter();

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("fadeIn");
    body.classList.remove("fadeOut");

    setTimeout(() => {
      body.classList.remove("fadeIn");
    }, 500);
  });

  const clickHandler = (path: string) => {
    pushRouteWithFade(path, route);
  };

  return (
    <div className={styles.menu}>
      <ul>
        {menuItems.map((item, index) => {
          return (
            <li
              className={styles.textFadeIn}
              style={{ animationDelay: `${index * 0.25}s` }}
              key={index}
              onClick={() => clickHandler(item.path)}
            >
              {item.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
