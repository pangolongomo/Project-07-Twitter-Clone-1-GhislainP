import { dateFormatter } from "../utils/helper";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import TweetActions from "./TweetActions";
import { TweetContext } from "./Tweet";
import { useContext } from "react";
import { Link } from "react-router-dom";

function TweetContent() {
  const tweet = useContext(TweetContext);

  return (
    <div className="flex-auto flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="flex items-center justify-start gap-1 text-base">
          <span>
            <Link to={`/${tweet.handle}`}>{tweet.name}</Link>
          </span>
          <span>
            <Link>
              {" "}
              <RiVerifiedBadgeFill />
            </Link>
          </span>
          <span className="text-[#6e767d]">
            <Link to={`/${tweet.handle}`}>{tweet.handle}</Link>
          </span>

          <span className="text-[#6e767d]">.</span>
          <span className="text-[#6e767d]">
            {dateFormatter(tweet.createdAt)}
          </span>
        </h2>

        <p className="text-[#d9d9d9] text-base">{tweet.text}</p>

        {tweet.media.length > 0 && (
          <div className="w-full aspect-[16/9] overflow-hidden rounded-[50px] bg-[#cfd9de]">
            <img
              src={tweet.media[0]}
              alt={tweet.text ? tweet.text.substr(10) : "no description"}
              className="w-full border border-[#2f3336] my-auto"
            />
          </div>
        )}
      </div>
      <TweetActions />
    </div>
  );
}

export default TweetContent;
