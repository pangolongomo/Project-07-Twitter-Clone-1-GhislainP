import React from "react";
import styles from "./Avatar.module.css";
import { userFromId } from "../../utils/userHelper";
import { Link } from "react-router-dom";

function Avatar({ avatarClass, userId }) {
  const user = userFromId(userId);
  return (
    <Link to={`/${user.userName}`}>
      <div className={styles[avatarClass]}>
        <img src={user.avatar} alt={`logo ${user.userName}`} />
      </div>
    </Link>
  );
}

export default Avatar;
