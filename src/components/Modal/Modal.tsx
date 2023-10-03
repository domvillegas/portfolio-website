import React, { MouseEventHandler } from "react";
import styles from "./Modal.module.scss";
import { Star } from "@/utils/types";

interface Props {
  visible: boolean;
  close: MouseEventHandler<HTMLButtonElement>;
  data: {} | Star;
}

const Modal = ({ visible = false, close, data }: Props) => {
  return (
    <div
      className={`${styles.modal} ${visible ? styles.reveal : styles.hide}
      `}
    >
      <p>{(data as Star).note}</p>
      <button onClick={close}>close</button>
    </div>
  );
};

export default Modal;
