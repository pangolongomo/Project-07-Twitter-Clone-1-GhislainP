import React from "react";
import Header from "../components/Header";
import TweetEditor from "../components/TweetEditor";
import Tweets from "../components/Tweets";
import { tweets } from "../models/tweets";

function Home() {
  return (
    <>
      <Header />
      <TweetEditor />
      <Tweets tweets={tweets} />
    </>
  );
}

export default Home;
