import React from "react";
import styles from "./Trends.module.css";
import SearchBar from "../SearchBar";
import SuggestionMenu from "../SuggestionMenu";
import Button from "../Button";
import UserHighlight from "../UserHighlight";
import { tweets } from "../../models/tweets";
import { trendsData } from "../../models/trends";
import TrendingTags from "../TrendingTags";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Footer from "../Footer";
import { PiGear } from "react-icons/pi";

function Trends() {
  return (
    <div className="col-span-2">
      <div className={styles.container}>
        <SearchBar placeholder="Search Twitter" />
        <SuggestionMenu title="Trends for you" optionIcon={PiGear}>
          {trendsData.slice(0, 4).map((element, i) => {
            return <TrendingTags key={i} trend={element} />;
          })}
        </SuggestionMenu>
        <SuggestionMenu title="Who to follow">
          {tweets.slice(0, 3).map((element) => {
            return (
              <UserHighlight
                key={element.tweetId}
                userId={element.userId}
                avatarClass="tweet-avatar"
                IconDesc={RiVerifiedBadgeFill}
              >
                <Button type={3}>Follow</Button>
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
