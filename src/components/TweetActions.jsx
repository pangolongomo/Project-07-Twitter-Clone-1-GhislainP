import React from "react";
import TweetAction from "./TweetAction";

function TweetActions({ tweetAction }) {
  return (
    <div className="flex justify-around text-gray-500 text-base">
      {tweetAction.map((action, i) => (
        <TweetAction key={i} action={action} />
      ))}
    </div>
  );
}

export default TweetActions;
