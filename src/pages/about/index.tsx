import React, { useEffect } from "react";
import { pushRouteWithFade } from "@/utils/helpers";
import { useRouter } from "next/router";
import styles from "./index.module.scss";
import MenuButton from "@/components/MenuButton/MenuButton";

const About = () => {
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
    <div className={styles.about}>
      <div>
        <p>
          Dom here 👋🏾 I'm a frontend developer from Portland, OR. <br /> I make
          web applications and websites.
        </p>
        <p>During my free time I paint abstracts and cycle.</p>
        <p>
          Feel free to{" "}
          <span
            onClick={() => {
              pushRouteWithFade("/contact", route);
            }}
          >
            reach out
          </span>{" "}
          for whatever &#8212; professional or otherwise.
        </p>
        <MenuButton />
      </div>
    </div>
  );
};

export default About;
