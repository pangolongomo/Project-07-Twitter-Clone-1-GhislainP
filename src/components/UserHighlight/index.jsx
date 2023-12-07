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
      <div className={styles.userDesc}>
        <Avatar
          avatarClass={avatarClass}
          image={avatarImage}
          description={avatarClass}
        />
        <div className={styles.aboutAuthor}>
          <div className="tweet-title-author">
            <span>{authorName}</span> {IconDesc && <IconDesc />}
          </div>
          <div className="tweet-title-details">@{authorUsername}</div>
        </div>
      </div>
      {children}
    </div>
  );
}

export default index;
