import React, { Suspense } from "react";
import { Link } from "react-router-dom";

function Avatar({ handle, profilePicture, width }) {
  return (
    <div
      className={`flex-none ${
        width || "w-[70px]"
      } aspect-[1/1] rounded-full bg-[#f7f9f9]`}
    >
      <Link to={`/${handle}`}>
        <Suspense fallback="">
          {profilePicture && (
            <img
              className="rounded-full w-full"
              src={profilePicture}
              alt={`logo ${handle}`}
            />
          )}
        </Suspense>
      </Link>
    </div>
  );
}

export default Avatar;
