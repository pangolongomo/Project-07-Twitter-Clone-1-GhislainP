import Tweet from "./Tweet/Tweet";

function Tweets({ tweets }) {
  const tweetList = tweets.map((tweet) => {
    return <Tweet key={tweet.tweetId} tweet={tweet} />;
  });

  return <div className="divide-y divide-[#2f3336]">{tweetList}</div>;
}

export default Tweets;
