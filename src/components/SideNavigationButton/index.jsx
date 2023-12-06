import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./SideNavigationButton.module.css";

function SideNavigationButton({ navigationButton }) {
  const { link, text, icon: Icon } = navigationButton;
  return (
    <li className={styles.sideNavigationButton}>
      <NavLink to={link}>
        <Icon />
        {text && <span>{text}</span>}
      </NavLink>
    </li>
  );
}

export default SideNavigationButton;
