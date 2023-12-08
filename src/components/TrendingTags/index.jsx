import React from "react";
import styles from "./TrendingTags.module.css";
import { BsThreeDots } from "react-icons/bs";

function TrendingTags({ trend }) {
  const { country, tag, count } = trend;
  return (
    <div className={styles.trendingTags}>
      <div>
        <p>Trending in {country}</p>
        <h4>#{tag}</h4>
        <p>{count} Tweets</p>
      </div>
      <BsThreeDots />
    </div>
  );
}

export default TrendingTags;
