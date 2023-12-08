import React from "react";
import styles from "./Button.module.css";

function Button({ text, type, action }) {
  let buttonType = styles.type1;
  if (type === 2) {
    buttonType = styles.type2;
  }
  if (type === 3) {
    buttonType = styles.type3;
  }
  return (
    <div className={[styles.button, buttonType].join(" ")} onClick={action}>
      {text}
    </div>
  );
}

export default Button;
