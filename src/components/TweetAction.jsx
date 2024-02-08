import React, { useContext } from "react";
import {
  actionCountformatter,
  getActionIcon,
  handleActionStyle,
} from "../utils/helper";
import { ACTIONS } from "../utils/actions.json";
import axios from "axios";
import { TweetContext } from "./Tweet";

function TweetAction({ action, tweetId }) {
  const tweet = useContext(TweetContext);

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
    const newActions = tweet.tweetAction.map((mappedAction) => {
      if (mappedAction.name !== ACTIONS.LIKE) {
        return mappedAction;
      }
      const newCount = mappedAction.like
        ? mappedAction.count - 1
        : mappedAction.count + 1;
      return { ...mappedAction, like: !mappedAction.like, count: newCount };
    });
    console.log(action);
    axios
      .patch(`http://localhost:8000/tweets/${tweetId}`, {
        tweetAction: newActions,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
    console.log(action);
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
