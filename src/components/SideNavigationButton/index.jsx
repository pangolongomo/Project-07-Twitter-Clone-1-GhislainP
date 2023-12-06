import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./SideNavigationButton.module.css";

function SideNavigationButton({ icon, text, link }) {
    console.log(icon);
  return (
    <li className={styles.sideNavigationButton}>
      <NavLink to={link}>
        {icon}
        {text && <span>{text}</span>}
      </NavLink>
    </li>
  );
}

export default SideNavigationButton;
