import React from "react";

function Avatar({ avatarClass, image, description }) {
  return (
    <div className={avatarClass}>
      <img src={image} alt={description} />
    </div>
  );
}

export default Avatar;
