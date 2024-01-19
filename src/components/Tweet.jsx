import React from "react";
import Avatar from "./Avatar";
import TweetContent from "./TweetContent";

export const TweetContext = React.createContext(null);

function Tweet({ tweet }) {
  return (
    <TweetContext.Provider value={tweet}>
      <div className="flex py-2 px-4 gap-2 items-start">
        <Avatar userId={tweet.userId} />
        <TweetContent />
      </div>
    </TweetContext.Provider>
  );
}

export default Tweet;
