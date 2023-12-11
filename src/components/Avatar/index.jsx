import React from "react";
import styles from "./Avatar.module.css";
import { userFromId } from "../../utils/userHelper";

function Avatar({ avatarClass, userId }) {
  const user = userFromId(userId);
  return (
    <div className={styles[avatarClass]}>
      <img src={user.avatar} alt={`logo ${user.userName}`} />
    </div>
  );
}

export default Avatar;
