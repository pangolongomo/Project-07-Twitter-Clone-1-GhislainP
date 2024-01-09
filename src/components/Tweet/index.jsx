import React from "react";
import Avatar from "../Avatar/Avatar";
import TweetContent from "./TweetContent";

export const TweetContext = React.createContext(null);

function Tweet({ tweet }) {
  return (
    <TweetContext.Provider value={tweet}>
      <div className="tweet">
        <Avatar avatarClass="tweet-avatar" userId={tweet.userId} />
        <TweetContent />
      </div>
    </TweetContext.Provider>
  );
}

export default Tweet;
