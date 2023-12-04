function TweetAvatar({ tweet }) {
  return (
    <div className="tweet-avatar">
      <img src={tweet.tweetAvatar} alt={`logo ${tweet.tweetOwnerName}`} />
    </div>
  );
}

export default TweetAvatar;
