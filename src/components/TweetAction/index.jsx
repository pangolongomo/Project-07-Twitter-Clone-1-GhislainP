import React from "react";
import styles from "./TweetAction.module.css";
import { actionCountformatter, getActionIcon } from "../../utils/helper";

function TweetActions({ action }) {
  const Icon = getActionIcon(action.name);

  let actionStyle = [styles.tweetAction];

  if (action.name === "message") {
    actionStyle.push(styles.message);
  } else if (action.name === "repost") {
    actionStyle.push(styles.repost);
  } else if (action.name === "like") {
    actionStyle.push(styles.like);
  } else if (action.name === "share") {
    actionStyle.push(styles.share);
  }

  return (
    <div className={actionStyle.join(" ")}>
      <span className={styles.icon}>
        <Icon />
      </span>

      {action.count && (
        <span>{actionCountformatter(action.count, action.isAction)}</span>
      )}
    </div>
  );
}

export default TweetActions;
