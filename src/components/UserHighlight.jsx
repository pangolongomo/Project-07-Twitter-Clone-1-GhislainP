import React from "react";
import Avatar from "./Avatar";
import AboutAuthor from "./AboutAuthor";

function UserHighlight({ user, IconDesc, children }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Avatar handle={user.handle} profilePicture={user.profilePicture} />

        <AboutAuthor
          handle={user.handle}
          IconDesc={IconDesc}
          name={user.name}
        />
      </div>
      {children}
    </div>
  );
}

export default UserHighlight;
