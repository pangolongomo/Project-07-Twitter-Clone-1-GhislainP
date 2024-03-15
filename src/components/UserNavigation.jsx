import React from "react";
import BackToPreviousRoot from "./BackToPreviousRoot";
import AboutAuthor from "./AboutAuthor";
import { RiVerifiedBadgeFill } from "react-icons/ri";

function UserNavigation({ user, postsCount }) {
  const otherDetails = `${postsCount} post${postsCount > 1 ? "s" : ""}`;
  return (
    <div className="flex items-center gap-4 p-2">
      <BackToPreviousRoot />
      {user && (
        <AboutAuthor
          handle={user.handle}
          IconDesc={RiVerifiedBadgeFill}
          name={user.name}
          otherDetails={otherDetails}
        />
      )}
    </div>
  );
}

export default UserNavigation;
