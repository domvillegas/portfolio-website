import React, { MouseEventHandler } from "react";
import styles from "./Modal.module.scss";

interface Props {
  visible: boolean;
  close: MouseEventHandler<HTMLButtonElement>;
}

const Modal = ({ visible = false, close }: Props) => {
  return (
    <div
      className={`${styles.modal} ${visible ? styles.reveal : styles.hide}
      `}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        incidunt nemo obcaecati ipsam eius reiciendis, id iusto exercitationem
        quia nisi vitae culpa veritatis ea architecto hic ex corporis sunt
        necessitatibus consectetur sit eos alias sed! In assumenda velit
        similique itaque nulla, ducimus officiis deserunt accusantium.
        Temporibus veniam aspernatur ipsa non.
      </p>
      <button onClick={close}>close</button>
    </div>
  );
};

export default Modal;
