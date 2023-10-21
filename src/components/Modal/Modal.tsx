import React, { MouseEventHandler, ReactNode } from "react";
import styles from "./Modal.module.scss";
import { Star } from "@/utils/types";

interface Props {
  visible: boolean;
  close: MouseEventHandler<HTMLButtonElement>;
  markup: ReactNode;
}

const Modal = ({ visible = false, close, markup }: Props) => {
  return (
    <>
      <div
        //@ts-ignore
        onClick={close}
        className={`${styles.backdrop} ${visible ? styles.backdropReveal : ""}`}
      />
      <div
        className={`${styles.modal} ${visible ? styles.reveal : styles.hide}
      `}
      >
        <div className={styles.buttonContainer}>
          <button onClick={close} type="button" className={styles.closeButton}>
            <div className={styles.closeButtonArmOne} />
            <div className={styles.closeButtonArmTwo} />
          </button>
        </div>
        {markup}
      </div>
    </>
  );
};

export default Modal;
