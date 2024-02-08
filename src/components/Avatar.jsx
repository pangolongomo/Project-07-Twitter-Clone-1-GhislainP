import React from "react";
import { Link } from "react-router-dom";
import { useUsers } from "../context/userContext";

function Avatar({ userId, width }) {
  const { getUserById } = useUsers();
  const { user, isPending, error } = getUserById(userId);

  return (
    <div
      className={`flex-none ${
        width || "w-[70px]"
      } aspect-[1/1] rounded-full bg-[#f7f9f9]`}
    >
      {!isPending && !error && user && (
        <Link to={`/${user.userName}`}>
          {user.avatar && (
            <img
              className="rounded-full w-full"
              src={user.avatar}
              alt={`logo ${user.userName}`}
            />
          )}
        </Link>
      )}
    </div>
  );
}

export default Avatar;
