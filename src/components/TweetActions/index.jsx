import React from "react";
import styles from "./TweetActions.module.css";
import { actionCountformatter, iconSizes } from "../../utils/helper";
import { BiMessageRounded, BiRepost } from "react-icons/bi";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiShare } from "react-icons/fi";

function getActionIcon(name) {
  let icon = null;
  if (name === "message") {
    icon = <BiMessageRounded style={iconSizes} />;
  } else if (name === "repost") {
    icon = <BiRepost style={iconSizes} />;
  } else if (name === "like") {
    icon = <IoMdHeartEmpty style={iconSizes} />;
  } else if (name === "share") {
    icon = <FiShare style={iconSizes} />;
  }
  return icon;
}

function TweetActions({ tweetAction }) {
  const actionList = tweetAction.map((action, index) => {
    return (
      <div className={styles.tweetAction} key={index}>
        <span>{getActionIcon(action.name)}</span>

        {action.count && (
          <span>{actionCountformatter(action.count, action.isAction)}</span>
        )}
      </div>
    );
  });

  return <div className={styles.tweetActions}>{actionList}</div>;
}

export default TweetActions;
