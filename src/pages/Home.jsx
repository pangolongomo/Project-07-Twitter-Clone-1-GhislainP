import React, { Suspense, useEffect, useState } from "react";
import Header from "../components/Header";
import TweetEditor from "../components/TweetEditor";
import Tweets from "../components/Tweets";
import { useTweets } from "../context/tweetContext";
import axios from "axios";

function Home() {
  // const { tweets } = useTweets();
  const [tweets, setTweet] = useState([]);

  async function getTweets() {
    const response = await axios.get("http://localhost:4000/tweets");

    setTweet(response.data);
  }

  useEffect(() => {
    getTweets();
  }, []);
  console.log(tweets);
  return (
    <>
      <Header />
      <TweetEditor />
      <Suspense fallback="<p>waiting</p>">
        <Tweets tweets={tweets} />
      </Suspense>
    </>
  );
}

export default Home;
