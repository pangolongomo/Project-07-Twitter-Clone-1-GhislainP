import Tweet from "./Tweet";
import { tweets } from "../model/tweets";

function Tweets() {
  const tweetList = tweets.map((tweet, key) => {
    return <Tweet key={key} tweet={tweet} />;
  });

  return <div className="tweets">{tweetList}</div>;
}

export default Tweets;
