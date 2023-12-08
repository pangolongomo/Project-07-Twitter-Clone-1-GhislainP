import React from "react";
import styles from "./Trends.module.css";
import SearchBar from "../SearchBar";
import SuggestionMenu from "../SuggestionMenu";
import Button from "../Button";
import UserHighlight from "../UserHighlight";
import { tweets } from "../../model/tweets";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Footer from "../Footer";
import { PiGear } from "react-icons/pi";

function Trends() {
  return (
    <div className={styles.trends}>
      <div className={styles.container}>
        <SearchBar placeholder="Search Twitter" />
        <SuggestionMenu title="Trends for you" optionIcon={PiGear}>
          {tweets.slice(0, 3).map((element) => {
            return (
              <UserHighlight
                key={element.tweetId}
                avatarClass="tweet-avatar"
                avatarImage={element.tweetAvatar}
                authorName={element.tweetAuthor}
                authorUsername={element.tweetAuthorUsername}
                authorDescritionIcon={
                  element.isCertified && RiVerifiedBadgeFill
                }
              >
                <Button text="Follow" type={3} />
              </UserHighlight>
            );
          })}
        </SuggestionMenu>
        <SuggestionMenu title="Who to follow">
          {tweets.slice(0, 3).map((element) => {
            return (
              <UserHighlight
                key={element.tweetId}
                avatarClass="tweet-avatar"
                avatarImage={element.tweetAvatar}
                authorName={element.tweetAuthor}
                authorUsername={element.tweetAuthorUsername}
                authorDescritionIcon={
                  element.isCertified && RiVerifiedBadgeFill
                }
              >
                <Button text="Follow" type={3} />
              </UserHighlight>
            );
          })}
        </SuggestionMenu>
        <Footer />
      </div>
    </div>
  );
}

export default Trends;
