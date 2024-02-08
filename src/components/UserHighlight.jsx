import React from "react";
import Avatar from "./Avatar";
import AboutAuthor from "./AboutAuthor";
import { useUsers } from "../context/userContext";

function UserHighlight({ userId, IconDesc, children }) {
  const { getUserById } = useUsers();
  const { user, isPending, error } = getUserById(userId);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Avatar userId={userId} />
        {isPending ? (
          <div>Loading</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <AboutAuthor
            userName={user.userName}
            IconDesc={IconDesc}
            name={user.name}
          />
        )}
      </div>
      {children}
    </div>
  );
}

export default UserHighlight;
