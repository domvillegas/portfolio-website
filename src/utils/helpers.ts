import { NextRouter } from "next/router";

export const pushRouteWithFade = (path: string, router: NextRouter) => {
  const body = document.getElementsByTagName("body")[0];

  body.classList.add("fadeOut");

  return setTimeout(() => {
    router.push(path);
  }, 750);
};

