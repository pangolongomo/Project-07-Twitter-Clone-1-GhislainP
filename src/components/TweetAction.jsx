import React from "react";
import {
  actionCountformatter,
  getActionIcon,
  handleActionStyle,
} from "../utils/helper";
import { ACTIONS } from "../utils/actions.json";
import axios from "axios";
import { useTweets } from "../context/tweetContext";

function TweetAction({ action, tweetId }) {
  const { tweets, setTweets } = useTweets();

  const { textStyle, iconBg } = handleActionStyle(action);

  const Icon = getActionIcon(action.name, action.like);
  function handleAction() {
    switch (action.name) {
      case ACTIONS.LIKE:
        handleLike();
      default:
        return;
    }
  }

  function handleLike() {
    const tweet = tweets.find((tweet) => tweet.id === tweetId);

    const newActions = tweet.tweetAction.map((mappedAction) => {
      if (mappedAction.name !== ACTIONS.LIKE) {
        return mappedAction;
      }
      const newCount = mappedAction.like
        ? mappedAction.count - 1
        : mappedAction.count + 1;
      return { ...mappedAction, like: !mappedAction.like, count: newCount };
    });

    axios
      .patch(`http://localhost:8000/tweets/${tweetId}`, {
        tweetAction: newActions,
      })
      .then((res) => {
        setTweets((prevTweets) => {
          const oldTweets = prevTweets.filter((tweet) => tweet.id !== tweetId);
          return [...oldTweets, res.data];
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  return (
    <button
      className={`flex items-center justify-center gap-2 bg-transparent border-none group ${textStyle}`}
      onClick={handleAction}
    >
      <span
        className={`flex items-center justify-center rounded-full p-2 ${iconBg} group-hover:bg-opacity-40`}
      >
        <Icon />
      </span>
      {action.count && <span>{actionCountformatter(action.count)}</span>}
    </button>
  );
}

export default TweetAction;
