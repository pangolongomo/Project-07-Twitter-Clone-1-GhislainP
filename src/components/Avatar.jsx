import React from "react";
import { userFromId } from "../utils/userHelper";
import { Link } from "react-router-dom";

function Avatar({ userId, width }) {
  const user = userFromId(userId);

  return (
    <div
      className={`flex-none ${
        width || "w-[70px]"
      } aspect-[1/1] rounded-full bg-[#f7f9f9]`}
    >
      <Link to={`/${user.userName}`}>
        {user.avatar && (
          <img
            className="rounded-full w-full"
            src={user.avatar}
            alt={`logo ${user.userName}`}
          />
        )}
      </Link>
    </div>
  );
}

export default Avatar;
