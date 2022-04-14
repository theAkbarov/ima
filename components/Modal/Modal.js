import styles from "./modal.module.scss";

import React from "react";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

function Modal({ children, show, onClose }) {
  const [isBrowser, setIsBrowser] = useState(true);


  useEffect(() => {
    setIsBrowser(true);
    return () => setIsBrowser(false)
  }, []);

  const modal = show ? (
    <>
      <div onClick={onClose} className={styles.overlay}></div>
      <div className={styles.modal_wrapper}>{children}</div>
    </>
  ) : null;

    return isBrowser && typeof document != 'undefined'
      ? createPortal(modal, 
         document.querySelector("#portal"))
      : null
}

export default Modal;
