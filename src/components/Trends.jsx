import React from "react";
import SearchBar from "./SearchBar";
import SuggestionMenu from "./SuggestionMenu";
import Button from "./Button";
import UserHighlight from "./UserHighlight";
import { trendsData } from "../models/trends";
import TrendingTags from ".";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Footer from "./Footer";
import { PiGear } from "react-icons/pi";
import { useTweets } from "../context/tweetContext";

function Trends() {
  const { tweets } = useTweets();
  return (
    <div className="col-span-2 px-4 py-2">
      <div className="flex flex-col gap-4 relative">
        <div className="sticky top-0 bg-[#000000] pb-1">
          <SearchBar placeholder="Search Twitter" />
        </div>
        <SuggestionMenu title="Trends for you" optionIcon={PiGear}>
          {trendsData.slice(0, 4).map((element, i) => {
            return <TrendingTags key={i} trend={element} />;
          })}
        </SuggestionMenu>
        <SuggestionMenu title="Who to follow">
          {tweets.slice(0, 3).map((element) => {
            return (
              <UserHighlight
                key={element.id}
                userId={element.userId}
                IconDesc={RiVerifiedBadgeFill}
              >
                <Button color="text-[#202327]" bg="bg-white">
                  Follow
                </Button>
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
