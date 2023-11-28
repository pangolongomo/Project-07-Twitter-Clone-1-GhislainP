import React, { useEffect, useState } from "react";
import {
  splitExtension,
  imageFetcher,
  actionCountformatter,
  dateFormatter,
  fetchIcons,
} from "../utils/helper";
import iconCertified from "../icons/iconCertified.svg";

function Tweet({ tweet }) {
  const [avatarImage, setAvatarImage] = useState(null);
  const [tweetImage, setTweetImage] = useState(null);
  const [actionIcons, setActionIcons] = useState([]);

  useEffect(() => {
    const imageFilename = splitExtension(tweet.tweetAvatar);
    imageFetcher(imageFilename).then((image) => setAvatarImage(image));
  }, [tweet.tweetAvatar]);

  useEffect(() => {
    if (!tweet.tweetImage) return;
    const imageFilename = splitExtension(tweet.tweetImage);
    imageFetcher(imageFilename).then((image) => setTweetImage(image));
  }, [tweet.tweetImage]);

  useEffect(() => {
    async function getActionIcon() {
      const icons = await Promise.all(
        tweet.tweetAction.map(async (action) => {
          return await fetchIcons(action.name);
        })
      );
      return icons;
    }
    getActionIcon().then((icons) => setActionIcons(icons));
  }, [tweet.tweetAction]);

  const actionList = tweet.tweetAction.map((action, index) => {
    return (
      <div className="tweet-action" key={index}>
        {actionIcons[index] && (
          <img src={actionIcons[index]} alt={action.name} />
        )}
        {action.count && <span>{actionCountformatter(action.count)}</span>}
      </div>
    );
  });

  return (
    <div className="tweet">
      <div className="tweet-avatar">
        <img src={avatarImage} alt={`logo ${tweet.tweetOwnerName}`} />
      </div>
      <div className="tweet-content">
        <div className="tweet-body">
          <h2 className="tweet-title">
            <span className="tweet-title-author">{tweet.tweetAuthor}</span>
            <span className="tweet-title-author">
              {tweet.isCertified && <img src={iconCertified} alt="certified" />}
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
          {tweetImage && (
            <div className="tweet-image">
              <img src={tweetImage} alt={tweet.tweetImage} />
            </div>
          )}
        </div>
        <div className="tweet-actions">{actionList}</div>
      </div>
    </div>
  );
}

export default Tweet;
