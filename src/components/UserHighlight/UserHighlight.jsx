import React from "react";
import Avatar from "../Avatar/Avatar";
import { users } from "../../models/users";
import AboutAuthor from "../AboutAuthor/AboutAuthor";

function UserHighlight({ userId, IconDesc, children }) {
  const user = users.filter((user) => user.userId === userId)[0];

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Avatar userId={userId}/>
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
