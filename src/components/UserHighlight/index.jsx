import React from "react";
import styles from "./UserHighlight.module.css";
import Avatar from "../Avatar";
import { users } from "../../models/users";
import { Link } from "react-router-dom";

function index({ userId, avatarClass, IconDesc, children }) {
  const user = users.filter((user) => user.userId === userId)[0];

  return (
    <div className={styles.userHighlight}>
      <div className={styles.userDesc}>
        <Avatar userId={userId} avatarClass={avatarClass} />
        <div className={styles.aboutAuthor}>
          <Link to={`/${user.userName}`}>
            <div className={styles.tweetTitleAuthor}>
              <span>{user.name}</span> {IconDesc && <IconDesc />}
            </div>
            <div className={styles.tweetTitleDetails}>@{user.userName}</div>
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
}

export default index;
