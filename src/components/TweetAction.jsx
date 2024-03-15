import React, { useContext } from "react";
import {
  actionCountformatter,
  getActionIcon,
  handleActionStyle,
} from "../utils/helper";
// import axios from "axios";
// import { useTweets } from "../context/tweetContext";
import { TweetContext } from "./Tweet";

function TweetAction({ name }) {
  let count = 0;
  let actionActive = false;
  const tweet = useContext(TweetContext);

  if (name === "message") {
    count = tweet.repliesCount;
  } else if (name === "repost") {
    count = tweet.retweetCount;
  } else if (name === "like") {
    count = tweet.favoriteCount;
    actionActive = tweet.liked;
  } else if (name === "share") {
    count = -1;
    actionActive = tweet.shared;
  }

  const { textStyle, iconBg } = handleActionStyle(name, actionActive);

  const Icon = getActionIcon(name, actionActive);
  function handleAction() {}

  return (
    <button
      className={`flex items-center justify-center gap-2 bg-transparent border-none group ${textStyle}`}
      onClick={() => handleAction()}
    >
      <span
        className={`flex items-center justify-center rounded-full p-2 ${iconBg} group-hover:bg-opacity-40`}
      >
        <Icon />
      </span>
      {count >= 0 && <span>{actionCountformatter(count)}</span>}
    </button>
  );
}

export default TweetAction;
