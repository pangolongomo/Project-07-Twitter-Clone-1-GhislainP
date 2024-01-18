import { dateFormatter } from "../utils/helper";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { userFromId } from "../utils/userHelper";
import TweetActions from "./TweetActions";
import { TweetContext } from "./Tweet";
import { useContext } from "react";
import { Link } from "react-router-dom";

function TweetContent() {
  const tweet = useContext(TweetContext);
  const user = userFromId(tweet.userId);
  return (
    <div className="flex-auto flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="flex items-center justify-start gap-1 text-base">
          <span>
            <Link to={`/${user.userName}`}>{user.name}</Link>
          </span>
          <span>
            <Link>{user.isCertified && <RiVerifiedBadgeFill />}</Link>
          </span>
          <span className="text-[#6e767d]">
            <Link to={`/${user.userName}`}>@{user.userName}</Link>
          </span>
          <span className="text-[#6e767d]">.</span>
          <span className="text-[#6e767d]">{dateFormatter(tweet.date)}</span>
        </h2>
        {tweet.tweetText && (
          <p className="text-[#d9d9d9] text-base">{tweet.tweetText}</p>
        )}
        {tweet.tweetImage && (
          <div className="w-full pt-1">
            <img
              src={tweet.tweetImage}
              alt="{tweet.tweetImage}"
              className="w-full h-auto rounded-[50px] border border-[#2f3336]"
            />
          </div>
        )}
      </div>
      <TweetActions />
    </div>
  );
}

export default TweetContent;
