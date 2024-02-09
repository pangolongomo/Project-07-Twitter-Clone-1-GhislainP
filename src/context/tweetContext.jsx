import React, { useContext } from "react";
import useData from "../hooks/useData";

const TweetContext = React.createContext(null);

export function useTweets() {
  return useContext(TweetContext);
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
