import React from "react";
import styles from "./TweetActions.module.css";
import TweetAction from "../TweetAction";

function TweetActions({ tweetAction }) {
  return (
    <div className={styles.tweetActions}>
      {tweetAction.map((action, i) => {
        <TweetAction key={i} action={action} />;
      })}
    </div>
  );
}

export default TweetActions;
