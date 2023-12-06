import React from "react";
import SideNavigationButton from "../SideNavigationButton";
import styles from "./SideNavigation.module.css";
import { navigationButtons } from "../../model/navigationButtons";
import Button from "../Button";

function SideNavigation() {
  return (
    <ul className={styles.sideNavigation}>
      {navigationButtons.map((navigationButton) => {
        return (
          <SideNavigationButton
            icon={navigationButton.icon}
            text={navigationButton.text}
            link={navigationButton.link}
          />
        );
      })}
      <Button type={2} text="Tweet" />
    </ul>
  );
}

export default SideNavigation;
