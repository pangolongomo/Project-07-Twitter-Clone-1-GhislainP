import Avatar from "./Avatar";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { PiChartBarHorizontalLight } from "react-icons/pi";
import { VscSmiley } from "react-icons/vsc";
import { TbCalendarStats } from "react-icons/tb";
import Button from "./Button";
import { isAuth } from "../utils/userHelper";

const tweetEditorActionsButtons = [
  { name: "image", icon: CiImageOn },
  { name: "gif", icon: MdOutlineGifBox },
  { name: "piChart", icon: PiChartBarHorizontalLight },
  { name: "emoji", icon: VscSmiley },
  { name: "calendar", icon: TbCalendarStats },
];

function TweetEditor() {
  const user = isAuth;
  return (
    <div className="flex py-2 px-4 gap-2">
      <Avatar userId={user.userId} />
      <div className="flex-auto">
        <input
          type="text"
          className="h-[60px] w-full bg-black text-2xl p-4"
          placeholder="What&rsquo;s happening?"
        />
        <div className="flex justify-between items-center py-2">
          <div className="flex justify-start items-center gap-2">
            {tweetEditorActionsButtons.map((Btn) => (
              <button className="text-2xl text-sky-500" key={Btn.name}>
                <Btn.icon />
              </button>
            ))}
          </div>
          <Button>Tweet</Button>
        </div>
      </div>
    </div>
  );
}

export default TweetEditor;
