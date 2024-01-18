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
      return tweets.filter((tweet) => tweet.id === action.payload.userId);
    default:
      return tweets;
  }
}

export default function TweetProvider({ children }) {
  const [tweets, dispatch] = useReducer(reducer, tweetsData);

  const value = { tweets, dispatch };

  return (
    <TweetContext.Provider value={value}>{children}</TweetContext.Provider>
  );
}
