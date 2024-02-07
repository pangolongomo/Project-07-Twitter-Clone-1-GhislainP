import React from "react";
import otherData from "../data/other-data.json";
import SearchBar from "./SearchBar";
import SuggestionMenu from "./SuggestionMenu";
import Button from "./Button";
import UserHighlight from "./UserHighlight";
import TrendingTags from ".";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Footer from "./Footer";
import { PiGear } from "react-icons/pi";
import useData from "../hooks/useData";

function Trends() {
  const { data: tweets, error, isPending } = useData("tweets", { _limit: 3 });

  return (
    <div className="col-span-2 px-4 py-2">
      <div className="flex flex-col gap-4 relative">
        <div className="sticky top-0 bg-[#000000] pb-1">
          <SearchBar placeholder="Search Twitter" />
        </div>
        <SuggestionMenu title="Trends for you" optionIcon={PiGear}>
          {otherData["trends-data"].slice(0, 4).map((element, i) => {
            return <TrendingTags key={i} trend={element} />;
          })}
        </SuggestionMenu>
        <SuggestionMenu title="Who to follow">
          {isPending ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            tweets.map((element) => {
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
            })
          )}
        </SuggestionMenu>
        <Footer />
      </div>
    </div>
  );
}

export default Trends;
