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
    children,
  } = props;
  return (
    <div className={styles.userHighlight}>
      <Avatar
        avatarClass={avatarClass}
        image={avatarImage}
        description={avatarClass}
      />
      <div className={styles.aboutAuthor}>
        <div className="tweet-title-author">
          {authorName} {IconDesc && <IconDesc />}
        </div>
        <div className="tweet-title-details">@{authorUsername}</div>
      </div>
      {children}
    </div>
  );
}

export default index;
