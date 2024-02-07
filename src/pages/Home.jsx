import React from "react";
import Header from "../components/Header";
import TweetEditor from "../components/TweetEditor";
import Tweets from "../components/Tweets";
import useData from "../hooks/useData";

function Home() {
  const { data, isPending, error } = useData("tweets");

  let tweets = null;

  if (isPending) {
    tweets = <div>Loading...</div>;
  } else if (error) {
    tweets = <div>{error}</div>;
  } else {
    tweets = <Tweets tweets={data} />;
  }

  return (
    <>
      <Header />
      <TweetEditor />
      {tweets}
    </>
  );
}

export default Home;
