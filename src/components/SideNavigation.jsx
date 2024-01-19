import React from "react";
import SideNavigationButton from "./SideNavigationButton";
import { sidebarNavElements } from "../utils/sidebarNavElements";
import Button from "./Button";

function SideNavigation() {
  const navigationButtons = sidebarNavElements();
  function clickOnTweet() {}
  return (
    <ul className="flex flex-col gap-2 text-lg">
      {navigationButtons.map((navigationButton, id) => {
        return (
          <SideNavigationButton key={id} navigationButton={navigationButton} />
        );
      })}
      <div className="flex justify-center">
        <Button action={clickOnTweet} width="w-3/4">
          Tweet
        </Button>
      </div>
    </ul>
  );
}

export default SideNavigation;
