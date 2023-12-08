import React from "react";
import styles from "./SuggestionMenu.module.css";
import { Link } from "react-router-dom";

function SuggestionMenu({ title, optionIcon: Icon, children }) {
  return (
    <div className={styles.suggestionMenu}>
      <div className={styles.topMenu}>
        <h3>{title}</h3>
        {Icon && <Icon />}
      </div>
      {children}
      <Link to="/">Show more</Link>
    </div>
  );
}

export default SuggestionMenu;