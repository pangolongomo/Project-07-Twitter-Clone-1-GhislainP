import React, { useEffect, useState } from "react";
import otherData from "../data/other-data.json";
import SearchBar from "./SearchBar";
import SuggestionMenu from "./SuggestionMenu";
import Button from "./Button";
import UserHighlight from "./UserHighlight";
import TrendingTags from "./TrendingTags";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Footer from "./Footer";
import { PiGear } from "react-icons/pi";
import axios from "axios";

function Trends() {
  const [someUsers, setSomeUsers] = useState(null);

  async function getSomeUsers(amount) {
    try {
      const response = await axios.get(
        `http://localhost:4000/users/s/${amount}`
      );
      setSomeUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSomeUsers(3);
  }, []);
  console.log(someUsers);
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
          {someUsers &&
            someUsers.map((user) => {
              return (
                <UserHighlight
                  key={user.handle}
                  user={user}
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
