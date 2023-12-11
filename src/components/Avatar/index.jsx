import React from "react";
import styles from "./Avatar.module.css";
import { users } from "../../model/users";

function Avatar({ avatarClass, userId }) {
  const user = users.filter((user) => user.userId === userId)[0];
  // console.log(user);
  return (
    <div className={styles[avatarClass]}>
      <img src={user.avatar} alt={`logo ${user.userName}`} />
    </div>
  );
}

export default Avatar;
