import { actionCountformatter, dateFormatter } from "../utils/helper";

function Tweet({ tweet }) {
  const actionList = tweet.tweetAction.map((action, index) => {
    return (
      <div className="tweet-action" key={index}>
        {action.iconLink && <img src={action.iconLink} alt={action.name} />}
        {action.count && <span>{actionCountformatter(action.count)}</span>}
      </div>
    );
  });

  return (
    <div className="tweet">
      <div className="tweet-avatar">
        <img src={tweet.tweetAvatar} alt={`logo ${tweet.tweetOwnerName}`} />
      </div>
      <div className="tweet-content">
        <div className="tweet-body">
          <h2 className="tweet-title">
            <span className="tweet-title-author">{tweet.tweetAuthor}</span>
            <span className="tweet-title-author">
              {tweet.isCertified && (
                <img
                  src="https://res.cloudinary.com/dvmqqgrx5/image/upload/v1701449372/Project-07-Twitter-Clone-1-GhislainP/icons/iconCertified_cei6tf.svg"
                  alt="certified"
                />
              )}
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
    </div>
  );
}

export default Tweet;
