import TweetAvatar from "./TweetAvatar";
import TweetContent from "./TweetContent";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <TweetAvatar tweet={tweet} />
      <TweetContent tweet={tweet} />
    </div>
  );
}

export default Tweet;
