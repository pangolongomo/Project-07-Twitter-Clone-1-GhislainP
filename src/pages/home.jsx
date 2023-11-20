import React from "react";
import Header from "../components/Header";
import TweetEditor from "../components/TweetEditor";

function Home() {
  return (
    <main className="timeline">
      <Header />
      <TweetEditor />
    </main>
  );
}

export default Home;
