import React from "react";
import Avatar from "./Avatar";
import AboutAuthor from "./AboutAuthor";
import useData from "../hooks/useData";

function UserHighlight({ userId, IconDesc, children }) {
  const { data: user, error, isPending } = useData(`current-user/${userId}`);

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
