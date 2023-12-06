import React from "react";
import Header from "../../components/Header";
import TweetEditor from "../../components/TweetEditor/TweetEditor";
import Tweets from "../../components/Tweets";
import styles from "./Home.module.css";

function Home() {
  return (
    <main className={styles.timeline}>
      <Header />
      <TweetEditor />
      <Tweets />
    </main>
  );
}

export default Home;
