import React from "react";
import Avatar from "../Avatar/Avatar";
import AboutAuthor from "../AboutAuthor/AboutAuthor";
import { userFromId } from "../../utils/userHelper";

function UserHighlight({ userId, IconDesc, children }) {
  const user = userFromId(userId);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Avatar userId={userId} />
        <AboutAuthor
          userName={user.userName}
          IconDesc={IconDesc}
          name={user.name}
        />
      </div>
      {children}
    </div>
  );
}

export default UserHighlight;
