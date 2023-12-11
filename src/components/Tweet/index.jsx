import Avatar from "../Avatar";
import TweetContent from "./TweetContent";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar
        avatarClass="tweet-avatar"
        userId={tweet.userId}
      />
      <TweetContent tweet={tweet} />
    </div>
  );
}

export default Tweet;
