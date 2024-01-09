import Avatar from "../Avatar/Avatar";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { PiChartBarHorizontalLight } from "react-icons/pi";
import { VscSmiley } from "react-icons/vsc";
import { TbCalendarStats } from "react-icons/tb";
import styles from "./TweetEditor.module.css";
import Button from "../Button";
import { isAuth } from "../../utils/userHelper";

function TweetEditor() {
  const user = isAuth;
  return (
    <div className="flex py-2 px-4 gap-2">
      <Avatar userId={user.userId} />
      <div className="flex-auto ">
        <input
          type="text"
          className="h-[60px] w-full bg-black "
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
          <Button>Tweet</Button>
        </div>
      </div>
    </div>
  );
}

export default TweetEditor;
