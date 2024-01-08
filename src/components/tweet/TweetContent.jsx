import { dateFormatter } from "../../utils/helper";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { userFromId } from "../../utils/userHelper";
import TweetActions from "../TweetActions";
import { TweetContext } from "../Tweet";
import { useContext } from "react";
import { Link } from "react-router-dom";

function TweetContent() {
  const tweet = useContext(TweetContext);
  const user = userFromId(tweet.userId);
  return (
    <div className="tweet-content">
      <div className="tweet-body">
        <h2 className="tweet-title">
          <span className="tweet-title-author">
            <Link to={`/${user.userName}`}>{user.name}</Link>
          </span>
          <span className="tweet-title-author">
            {user.isCertified && <RiVerifiedBadgeFill />}
          </span>
          <span className="tweet-title-details">
            <Link to={`/${user.userName}`}>@{user.userName}</Link>
          </span>
          <span className="tweet-title-details">.</span>
          <span className="tweet-title-details">
            {dateFormatter(tweet.date)}
          </span>
        </h2>
        {tweet.tweetText && <p className="tweet-text">{tweet.tweetText}</p>}
        {tweet.tweetImage && (
          <div className="tweet-image">
            <img src={tweet.tweetImage} alt="{tweet.tweetImage}" />
          </div>
        )}
      </div>
      <TweetActions tweetAction={tweet.tweetAction} />
    </div>
  );
}

export default TweetContent;
