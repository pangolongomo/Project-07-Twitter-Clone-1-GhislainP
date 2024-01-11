import React from "react";
import { BsThreeDots } from "react-icons/bs";

function TrendingTags({ trend }) {
  const { country, tag, count } = trend;
  return (
    <div className="flex justify-between items-start">
      <div className="text-[#6e767d] text-base">
        <p>Trending in {country}</p>
        <h4 className="text-white text-lg">#{tag}</h4>
        <p>{count} Tweets</p>
      </div>
      <BsThreeDots />
    </div>
  );
}

export default TrendingTags;
