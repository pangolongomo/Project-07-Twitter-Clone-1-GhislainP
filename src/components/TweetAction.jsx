import React, { useContext, useEffect, useState } from "react";
import {
  actionCountformatter,
  getActionIcon,
  handleActionStyle,
} from "../utils/helper";

import { TweetContext } from "./Tweet";
import axios from "axios";

function TweetAction({ name }) {
  const API_URL = "http://localhost:4000";
  let [count, setCount] = useState(-1);
  let [actionActive, setActionActive] = useState(false);

  const tweet = useContext(TweetContext);

  useEffect(() => {
    if (name === "message") {
      setCount(tweet.repliesCount);
    } else if (name === "repost") {
      setCount(tweet.retweetCount);
    } else if (name === "like") {
      setCount(tweet.favoriteCount);
      setActionActive(tweet.liked);
    } else if (name === "share") {
      setActionActive(tweet.shared);
    }
  }, []);

  const { textStyle, iconBg } = handleActionStyle(name, actionActive);

  const Icon = getActionIcon(name, actionActive);
  function handleAction() {
    if (name === "like") {
      likeTweet();
    }
  }

  async function likeTweet() {
    if (actionActive) setCount((prevCount) => prevCount - 1);
    else setCount((prevCount) => prevCount + 1);
    setActionActive((prevActionActive) => !prevActionActive);

    try {
      const response = await axios.put(API_URL + `/tweets/${tweet.id}/like`);
      if (response.status !== 200) {
        if (actionActive) setCount((prevCount) => prevCount - 1);
        else setCount((prevCount) => prevCount + 1);
        setActionActive((prevActionActive) => !prevActionActive);
      }
    } catch (e) {
      console.log("something went wrong");
    }
  }

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
