import React from "react";
import sytles from "./UserNavigation.module.css";
import BackToPreviousRoot from "../BackToPreviousRoot/BackToPreviousRoot";
import AboutAuthor from "../AboutAuthor/AboutAuthor";
import { RiVerifiedBadgeFill } from "react-icons/ri";

function UserNavigation({ user, postsCount }) {
  const IconDesc = user.isCertified && RiVerifiedBadgeFill;
  const otherDetails = `${postsCount} post${postsCount > 1 ? "s" : ""}`;
  return (
    <div className={sytles.navigation}>
      <BackToPreviousRoot />
      <AboutAuthor
        userName={user.userName}
        IconDesc={IconDesc}
        name={user.name}
        otherDetails={otherDetails}
      />
    </div>
  );
}

export default UserNavigation;
