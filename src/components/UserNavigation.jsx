import React from "react";
import BackToPreviousRoot from "./BackToPreviousRoot";
import AboutAuthor from "./AboutAuthor";
import { RiVerifiedBadgeFill } from "react-icons/ri";

function UserNavigation({ user, postsCount }) {
  const IconDesc = user ? user.isCertified && RiVerifiedBadgeFill : null;
  const otherDetails = `${postsCount} post${postsCount > 1 ? "s" : ""}`;
  return (
    <div className="flex items-center gap-4 p-2">
      <BackToPreviousRoot />
      {user && (
        <AboutAuthor
          userName={user.userName}
          IconDesc={IconDesc}
          name={user.name}
          otherDetails={otherDetails}
        />
      )}
    </div>
  );
}

export default UserNavigation;
