import React from "react";
import Header from "../components/Header";
import TweetEditor from "../components/TweetEditor";
import Tweets from "../components/Tweets";
import useFetch from "../hooks/useFetch";

function Home() {
  const endpoint = `/tweets`;
  const { data: tweets, error, loading } = useFetch(endpoint);

  return (
    <>
      <Header />
      <TweetEditor />
      {loading && <div>loading...</div>}
      {error && <div>something went wrong</div>}
      {tweets && <Tweets tweets={tweets} />}
    </>
  );
}

export default Home;
