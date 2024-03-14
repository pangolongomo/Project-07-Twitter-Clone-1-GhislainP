import React from "react";
import TweetAction from "./TweetAction";

function TweetActions() {
  return (
    <div className="flex justify-around text-gray-500 text-base">
      <TweetAction name="message" />
      <TweetAction name="repost" />
      <TweetAction name="like" />
      <TweetAction name="share" />
    </div>
  );
}

export default TweetActions;
