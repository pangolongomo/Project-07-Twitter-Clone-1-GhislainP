import Tweet from "./Tweet";

function Tweets({ tweets }) {
  const tweetList = tweets.map((tweet) => {
    return <Tweet key={tweet.tweetId} tweet={tweet} />;
  });

  return <div className="tweets">{tweetList}</div>;
}

export default Tweets;
