import React from "react";
import { userFromId } from "../../utils/userHelper";
import { Link } from "react-router-dom";

function Avatar({ userId }) {
  const user = userFromId(userId);
  return (
    <div className="flex-initial w-[70px]">
      <Link to={`/${user.userName}`}>
        <img className="rounded-full" src={user.avatar} alt={`logo ${user.userName}`} />
      </Link>
    </div>
  );
}

export default Avatar;
