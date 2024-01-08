import React from "react";
import styles from "./Button.module.css";

function Button({ children, type, action }) {
  let buttonType = styles.type1;
  if (type === 2) {
    buttonType = styles.type2;
  }
  if (type === 3) {
    buttonType = styles.type3;
  }
  if (type === 4) {
    buttonType = styles.type4;
  }
  return (
    <button className={[styles.button, buttonType].join(" ")} onClick={action}>
      {children}
    </button>
  );
}

export default Button;
