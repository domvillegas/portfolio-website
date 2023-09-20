import React from "react";
import { pushRouteWithFade } from "@/utils/helpers";
import { useRouter } from "next/router";
import styles from "./MenuButton.module.scss";

const MenuButton = () => {
  const route = useRouter();

  return (
    <button
      className={`${styles.menuButton} ${styles.fadeIn}`}
      type="button"
      onClick={() => {
        pushRouteWithFade("/menu", route);
      }}
    >
      menu
    </button>
  );
};

export default MenuButton;
