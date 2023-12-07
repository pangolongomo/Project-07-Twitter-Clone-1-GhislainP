import { dateFormatter, iconSizes } from "../../utils/helper";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { actionCountformatter } from "../../utils/helper";
import { BiMessageRounded, BiRepost } from "react-icons/bi";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiShare } from "react-icons/fi";

function getActionIcon(name) {
  let icon = null;
  if (name === "message") {
    icon = <BiMessageRounded style={iconSizes} />;
  } else if (name === "repost") {
    icon = <BiRepost style={iconSizes} />;
  } else if (name === "like") {
    icon = <IoMdHeartEmpty style={iconSizes} />;
  } else if (name === "share") {
    icon = <FiShare style={iconSizes} />;
  }
  return icon;
}

function TweetContent({ tweet }) {
  const actionList = tweet.tweetAction.map((action, index) => {
    return (
      <div className="tweet-action" key={index}>
        <span>{getActionIcon(action.name)}</span>

        {action.count && (
          <span>{actionCountformatter(action.count, action.isAction)}</span>
        )}
      </div>
    );
  });
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
      <div className="tweet-actions">{actionList}</div>
    </div>
  );
}

export default TweetContent;
