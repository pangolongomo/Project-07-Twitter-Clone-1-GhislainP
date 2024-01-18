import React, { useContext, useReducer } from "react";
import { tweetsData } from "../models/tweets";

const TweetContext = React.createContext(null);

export const ACTIONS = {
  ADD_TWEET: "add-tweet",
};

export function useTweets() {
  return useContext(TweetContext);
}

function reducer(tweets, action) {
  switch (action.type) {
    case ACTIONS.ADD_TWEET:
      return [...tweets, newTweet(action.payload)];
    default:
      return tweets;
  }
}

function newTweet(tweet) {
  return {
    id: Date.now(),
    userId: tweet.id,
    tweetText: tweet.tweetText,
    tweetImage: tweet.tweetImage,
    tweetAction: [],
    date: new Date().toISOString(),
  };
}

export default function TweetProvider({ children }) {
  const [tweets, dispatch] = useReducer(reducer, tweetsData);

  const value = { tweets, dispatch };

  return (
    <TweetContext.Provider value={value}>{children}</TweetContext.Provider>
  );
}
