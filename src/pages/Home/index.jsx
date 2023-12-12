import React from "react";
import Header from "../../components/Header";
import TweetEditor from "../../components/TweetEditor/TweetEditor";
import Tweets from "../../components/Tweets";

function Home() {
  return (
    <>
      <Header />
      <TweetEditor />
      <Tweets />
    </>
  );
}

export default Home;
