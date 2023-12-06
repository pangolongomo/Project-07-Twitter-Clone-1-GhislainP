import React from "react";
import styles from "./UserHighlight.module.css";
import Avatar from "../Avatar";

function index(props) {
  const {
    avatarClass,
    avatarImage,
    authorName,
    authorUsername,
    authorDescritionIcon: IconDesc,
    actionButton: ActionButton,
  } = props;
  return (
    <div className={styles.userHighlight}>
      <Avatar
        avatarClass={avatarClass}
        image={avatarImage}
        description={avatarClass}
      />
      <div className={styles.aboutAuthor}>
        <div className={styles.authorName}>
          {authorName} <IconDesc />
        </div>
        <div className={styles.authorUsername}>@{authorUsername}</div>
      </div>
      <ActionButton />
    </div>
  );
}

export default index;
