import React from "react";
import { actionCountformatter, getActionIcon } from "../utils/helper";
import { useTweets } from "../context/tweetContext";
import { ACTIONS, REDUCER_ACTIONS } from "../utils/actions.json";

function TweetAction({ action, tweetId }) {
  const { dispatch } = useTweets();

  const Icon = getActionIcon(action.name, action.like);
  function handleAction() {
    switch (action.name) {
      case ACTIONS.LIKE:
        dispatch({
          type: REDUCER_ACTIONS.UPDATE_LIKE,
          payload: { tweetId: tweetId },
        });
      default:
        return;
    }
  }

  let textStyle;
  let iconBg;

  if (action.name === "message") {
    textStyle = `hover:text-[#1e9cf1] ${action.like ? `text-[#1e9cf1]` : ""}`;
    iconBg = `group-hover:bg-[#1e9cf1]`;
  } else if (action.name === "repost") {
    textStyle = `hover:text-[#14c288] ${action.like ? `text-[#14c288]` : ""}`;
    iconBg = `group-hover:bg-[#14c288]`;
  } else if (action.name === "like") {
    textStyle = `hover:text-[#f92f8d] ${action.like ? `text-[#f92f8d]` : ""}`;
    iconBg = `group-hover:bg-[#f92f8d]`;
  } else if (action.name === "share") {
    textStyle = `hover:text-[#1e9cf1] ${action.like ? `text-[#1e9cf1]` : ""}`;
    iconBg = `group-hover:bg-[#1e9cf1]`;
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
