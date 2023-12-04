import { dateFormatter } from "../../utils/helper";
import { Verified } from "@mui/icons-material";
import { actionCountformatter, getActionIcon } from "../../utils/helper";

function TweetContent({ tweet }) {
  const actionList = tweet.tweetAction.map((action, index) => {
    return (
      <div className="tweet-action" key={index}>
        <img src={getActionIcon(action.name)} alt={action.name} />

        {action.count && <span>{actionCountformatter(action.count)}</span>}
      </div>
    );
  });
  return (
    <div className="tweet-content">
      <div className="tweet-body">
        <h2 className="tweet-title">
          <span className="tweet-title-author">{tweet.tweetAuthor}</span>
          <span className="tweet-title-author">
            {tweet.isCertified && <Verified />}
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
