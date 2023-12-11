import React from "react";
import SideNavigationButton from "../SideNavigationButton";
import styles from "./SideNavigation.module.css";
import { navigationButtons } from "../../models/navigationButtons";
import Button from "../Button";

function SideNavigation() {
  function clickOnTweet() {}
  return (
    <ul className={styles.sideNavigation}>
      {navigationButtons.map((navigationButton, id) => {
        return (
          <SideNavigationButton key={id} navigationButton={navigationButton} />
        );
      })}
      <Button type={2} text="Tweet" action={clickOnTweet} />
    </ul>
  );
}

export default SideNavigation;
