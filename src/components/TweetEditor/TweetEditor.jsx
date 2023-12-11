import Avatar from "../Avatar";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { PiChartBarHorizontalLight } from "react-icons/pi";
import { VscSmiley } from "react-icons/vsc";
import { TbCalendarStats } from "react-icons/tb";
import styles from "./TweetEditor.module.css";
import Button from "../Button";
import { users } from "../../models/users";

function TweetEditor() {
  const user = users.filter((user) => user.loggedIn === true)[0];
  return (
    <div className={[styles.tweetEditor, "tweet-editor"].join(" ")}>
      <Avatar avatarClass="avatar" userId={user.userId} />
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
