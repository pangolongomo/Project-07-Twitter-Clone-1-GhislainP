import Avatar from "../Avatar";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { PiChartBarHorizontalLight } from "react-icons/pi";
import { VscSmiley } from "react-icons/vsc";
import { TbCalendarStats } from "react-icons/tb";
import styles from "./TweetEditor.module.css";
import Button from "../Button";

function TweetEditor() {
  const avatarImage =
    "https://res.cloudinary.com/dvmqqgrx5/image/upload/v1701448976/Project-07-Twitter-Clone-1-GhislainP/images/profile-photo_opdacz.png";
  return (
    <div className={[styles.tweetEditor, "tweet-editor"].join(" ")}>
      <Avatar avatarClass="avatar" image={avatarImage} description="avatar" />
      <div className="tweet-editor-form">
        <input
          type="text"
          className="tweet-editor-input"
          placeholder="What&rsquo;s happening?"
        />
        <div className="tweet-editor-buttons">
          <div className="tweet-editor-actions">
            <button>
              <CiImageOn />
            </button>
            <button>
              <MdOutlineGifBox />
            </button>
            <button>
              <PiChartBarHorizontalLight />
            </button>
            <button>
              <VscSmiley />
            </button>
            <button>
              <TbCalendarStats />
            </button>
          </div>
          <Button text="Tweet" />
        </div>
      </div>
    </div>
  );
}

export default TweetEditor;
