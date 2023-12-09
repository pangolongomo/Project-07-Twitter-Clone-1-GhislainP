import React, { useEffect, useState } from "react";
import styles from "./TweetAction.module.css";
import { actionCountformatter, getActionIcon } from "../../utils/helper";

function TweetActions({ action }) {
  const [actionState, setActionState] = useState(false);

  const Icon = getActionIcon(action.name, actionState);
  function handleAction() {
    if (action.name === "like") {
      setActionState((prevActionState) => !prevActionState);
    }
  }

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

  if (actionState) {
    actionStyle.push(styles.colored);
  }

  return (
    <div className={actionStyle.join(" ")} onClick={handleAction}>
      <span className={styles.icon}>
        <Icon />
      </span>
      {action.count && (
        <span>
          {actionCountformatter(actionState ? action.count + 1 : action.count)}
        </span>
      )}
    </div>
  );
}

export default TweetActions;
