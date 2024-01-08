import React from "react";
import styles from "./Avatar.module.css";
import { userFromId } from "../../utils/userHelper";
import { Link } from "react-router-dom";

function Avatar({ avatarClass, userId }) {
  const user = userFromId(userId);
  return (
    <div className={styles[avatarClass]}>
      <Link to={`/${user.userName}`}>
        <img src={user.avatar} alt={`logo ${user.userName}`} />
      </Link>
    </div>
  );
}

export default Avatar;
