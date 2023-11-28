import Tweet from "./Tweet";
import { tweets } from "../model/tweets";

function Tweets() {
  const tweetList = tweets.map((tweet) => {
    return <Tweet key={tweet.tweetId} tweet={tweet} />;
  });

  return <div className="tweets">{tweetList}</div>;
}

export default Tweets;
