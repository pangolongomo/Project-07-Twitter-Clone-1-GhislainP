import React from "react";
import styles from "./Button.module.css";

function Button({ text, type }) {
  let buttonSytle = styles.type1;
  if (type === 2) {
    buttonSytle = styles.type2;
  }
  return <div className={[styles.button, buttonSytle].join(" ")}>{text}</div>;
}

export default Button;
