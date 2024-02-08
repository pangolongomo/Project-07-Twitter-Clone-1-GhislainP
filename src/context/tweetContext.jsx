import React, { useContext, useReducer } from "react";
import { ACTIONS, REDUCER_ACTIONS } from "../utils/actions.json";
import useData from "../hooks/useData";

const TweetContext = React.createContext(null);

export function useTweets() {
  return useContext(TweetContext);
}

function reducer(tweets, action) {
  switch (action.type) {
    case REDUCER_ACTIONS.ADD_TWEET:
      return [...tweets, newTweet(action.payload)];
    case REDUCER_ACTIONS.UPDATE_LIKE:
      return tweets.map((tweet) => {
        return handleLike(tweet, action.payload.tweetId);
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

function handleLike(tweet, tweetId) {
  if (tweet.id !== tweetId) {
    return tweet;
  }

  const newActions = tweet.tweetAction.map((action) => {
    if (action.name !== ACTIONS.LIKE) {
      return action;
    }
    const newCount = action.like ? action.count - 1 : action.count + 1;
    return { ...action, like: !action.like, count: newCount };
  });

  return { ...tweet, tweetAction: newActions };
}

export default function TweetProvider({ children }) {
  const {
    data: tweets,
    isPending,
    error,
    setData: setTweets,
  } = useData("tweets");

  if (isPending) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>{error}</div>;
  } else {
    const value = { tweets, setTweets };
    return (
      <TweetContext.Provider value={value}>{children}</TweetContext.Provider>
    );
  }
}
