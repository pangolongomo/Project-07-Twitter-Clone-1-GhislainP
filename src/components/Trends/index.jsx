import React from "react";
import styles from "./Trends.module.css";
import SearchBar from "../SearchBar";
import SuggestionMenu from "../SuggestionMenu";
import Button from "../Button";
import UserHighlight from "../UserHighlight";
import { tweets } from "../../model/tweets";
import { RiVerifiedBadgeFill } from "react-icons/ri";

function Trends() {
  return (
    <div className={styles.trends}>
      <div className={styles.container}>
        <SearchBar placeholder="Search Twitter" />
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
      </div>
    </div>
  );
}

export default Trends;
