import React from "react";
import { pushRouteWithFade } from "@/utils/helpers";
import { useRouter } from "next/router";
import styles from "./MenuButton.module.scss";

interface Props {
  className?: string;
}

const MenuButton = ({ className }: Props) => {
  const route = useRouter();

  return (
    <button
      className={`${styles.menuButton} ${styles.fadeIn} ${
        className ? className : ""
      }`}
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
