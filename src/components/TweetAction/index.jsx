import React from "react";
import styles from "./TweetAction.module.css";
import { actionCountformatter, getActionIcon } from "../../utils/helper";

function TweetActions({ action }) {
  const Icon = getActionIcon(action.name);
  return (
    <div className={styles.tweetAction}>
      <span>
        <Icon />
      </span>

      {action.count && (
        <span>{actionCountformatter(action.count, action.isAction)}</span>
      )}
    </div>
  );
}

export default TweetActions;
