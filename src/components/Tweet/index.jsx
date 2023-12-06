import Avatar from "../Avatar";
import TweetContent from "./TweetContent";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar
        avatarClass="tweet-avatar"
        image={tweet.tweetAvatar}
        description={tweet.tweetOwnerName}
      />
      <TweetContent tweet={tweet} />
    </div>
  );
}

export default Tweet;
