import React from "react";
import styles from "./UserHighlight.module.css";
import Avatar from "../Avatar";
import { users } from "../../models/users";
import AboutAuthor from "../AboutAuthor/AboutAuthor";

function UserHighlight({ userId, avatarClass, IconDesc, children }) {
  const user = users.filter((user) => user.userId === userId)[0];

  return (
    <div className={styles.userHighlight}>
      <div className={styles.userDesc}>
        <Avatar userId={userId} avatarClass={avatarClass} />
        <AboutAuthor
          userName={user.userName}
          IconDesc={IconDesc}
          name={user.name}
        />
      </div>
      {children}
    </div>
  );
}

export default UserHighlight;
