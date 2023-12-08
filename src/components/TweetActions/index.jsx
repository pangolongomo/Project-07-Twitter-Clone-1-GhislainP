import React from "react";
import styles from "./TweetActions.module.css";
import {
  actionCountformatter,
  getActionIcon,
  iconSizes,
} from "../../utils/helper";

function TweetActions({ tweetAction }) {
  const actionList = tweetAction.map((action, index) => {
    const Icon = getActionIcon(action.name);
    return (
      <div className={styles.tweetAction} key={index}>
        <span>
          <Icon style={iconSizes} />
        </span>

        {action.count && (
          <span>{actionCountformatter(action.count, action.isAction)}</span>
        )}
      </div>
    );
  });

  return <div className={styles.tweetActions}>{actionList}</div>;
}

export default TweetActions;
