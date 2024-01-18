import React from "react";
import Header from "../components/Header";
import TweetEditor from "../components/TweetEditor";
import Tweets from "../components/Tweets";
import { useTweets } from "../context/tweetContext";

function Home() {
  const { tweets } = useTweets();
  console.log(tweets);
  return (
    <>
      <Header />
      <TweetEditor />
      <Tweets tweets={tweets} />
    </>
  );
}

export default Home;
