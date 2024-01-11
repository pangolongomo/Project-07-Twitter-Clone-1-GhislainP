import React, { useState } from "react";
import { actionCountformatter, getActionIcon } from "../../utils/helper";

function TweetAction({ action }) {
  const [actionState, setActionState] = useState(false);

  const Icon = getActionIcon(action.name, actionState);
  function handleAction() {
    if (action.name === "like") {
      setActionState((prevActionState) => !prevActionState);
    }
  }

  let textStyle;
  let iconBg;

  if (action.name === "message") {
    textStyle = `hover:text-[#1e9cf1] ${actionState ? `text-[#1e9cf1]` : ""}`;
    iconBg = `group-hover:bg-[#1e9cf1]`;
  } else if (action.name === "repost") {
    textStyle = `hover:text-[#14c288] ${actionState ? `text-[#14c288]` : ""}`;
    iconBg = `group-hover:bg-[#14c288]`;
  } else if (action.name === "like") {
    textStyle = `hover:text-[#f92f8d] ${actionState ? `text-[#f92f8d]` : ""}`;
    iconBg = `group-hover:bg-[#f92f8d]`;
  } else if (action.name === "share") {
    textStyle = `hover:text-[#1e9cf1] ${actionState ? `text-[#1e9cf1]` : ""}`;
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
      {action.count && (
        <span>
          {actionCountformatter(actionState ? action.count + 1 : action.count)}
        </span>
      )}
    </button>
  );
}

export default TweetAction;
