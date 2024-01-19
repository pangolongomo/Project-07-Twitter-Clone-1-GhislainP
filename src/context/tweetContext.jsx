import React, { useContext, useReducer } from "react";
import data from "../data/initial-data.json";

const TweetContext = React.createContext(null);

export const ACTIONS = {
  ADD_TWEET: "add-tweet",
  UPDATE_TWEET_ACTION: "update-tweet-action",
};

export function useTweets() {
  return useContext(TweetContext);
}

function reducer(tweets, action) {
  switch (action.type) {
    case ACTIONS.ADD_TWEET:
      return [...tweets, newTweet(action.payload)];
    case ACTIONS.UPDATE_TWEET_ACTION:
      console.log(action.payload.name, action.payload.tweetId);
      return tweets.map((tweet) => {
        if (action.payload.tweetId === tweet.id) {
          const updatedTweetAction = handleTweetAction(
            tweet.tweetAction,
            action.payload.name
          );
          return { ...tweet, tweetAction: updatedTweetAction };
        }
        return tweet;
      });
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
    tweetAction: [
      { name: "message", count: 0 },
      { name: "repost", count: 0 },
      { name: "like", count: 0 },
      { name: "share" },
    ],
    date: new Date().toISOString(),
  };
}

function handleTweetAction(tweetActions, actionName) {
  return tweetActions.map((action) => {
    // Increment the number of likes when the user clicks the button
    if (action.name === actionName) {
      const newCount = action.like ? action.count - 1 : action.count + 1;
      return { ...action, like: !action.like, count: newCount };
    }
    return action;
  });
}

export default function TweetProvider({ children }) {
  const [tweets, dispatch] = useReducer(reducer, data.tweets);

  const value = { tweets, dispatch };

  return (
    <TweetContext.Provider value={value}>{children}</TweetContext.Provider>
  );
}
