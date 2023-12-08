import { dateFormatter } from "../../utils/helper";
import { RiVerifiedBadgeFill } from "react-icons/ri";

import TweetActions from "../TweetActions";

function TweetContent({ tweet }) {
  return (
    <div className="tweet-content">
      <div className="tweet-body">
        <h2 className="tweet-title">
          <span className="tweet-title-author">{tweet.tweetAuthor}</span>
          <span className="tweet-title-author">
            {tweet.isCertified && <RiVerifiedBadgeFill />}
          </span>
          <span className="tweet-title-details">
            @{tweet.tweetAuthorUsername}
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
