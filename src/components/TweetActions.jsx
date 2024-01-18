import React, { useContext } from "react";
import TweetAction from "./TweetAction";
import { TweetContext } from "./Tweet";

function TweetActions() {
  const tweet = useContext(TweetContext);
  return (
    <div className="flex justify-around text-gray-500 text-base">
      {tweet.tweetAction.map((action, i) => (
        <TweetAction key={i} action={action} tweetId={tweet.id} />
      ))}
    </div>
  );
}

export default TweetActions;
