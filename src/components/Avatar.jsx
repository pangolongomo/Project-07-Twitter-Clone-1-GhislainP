import React from "react";
import { userFromId } from "../utils/userHelper";
import { Link } from "react-router-dom";

function Avatar({ userId, width, position }) {
  const user = userFromId(userId);
  console.log(user.userName);
  return (
    <div className={`flex-none ${width || "w-[70px]"} ${position || ""}`}>
      <Link to={`/${user.userName}`}>
        <img
          className="rounded-full w-full"
          src={user.avatar}
          alt={`logo ${user.userName}`}
        />
      </Link>
    </div>
  );
}

export default Avatar;
