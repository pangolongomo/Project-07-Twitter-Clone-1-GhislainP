import Avatar from "./Avatar";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { PiChartBarHorizontalLight } from "react-icons/pi";
import { VscSmiley } from "react-icons/vsc";
import { TbCalendarStats } from "react-icons/tb";
import Button from "./Button";
import { isAuth } from "../utils/userHelper";
import { ACTIONS, useTweets } from "../context/tweetContext";
import { useState } from "react";

const tweetEditorActionsButtons = [
  { name: "image", icon: CiImageOn },
  { name: "gif", icon: MdOutlineGifBox },
  { name: "piChart", icon: PiChartBarHorizontalLight },
  { name: "emoji", icon: VscSmiley },
  { name: "calendar", icon: TbCalendarStats },
];

function TweetEditor() {
  const [tweetText, setTweetText] = useState("");
  const user = isAuth();
  const { dispatch } = useTweets();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: ACTIONS.ADD_TWEET,
      payload: { tweetText: tweetText, id: user.id, tweetImage: null },
    });
    setTweetText("");
  }

  return (
    <div className="flex py-2 px-4 gap-2">
      <Avatar userId={user.id} />
      <form className="flex-auto" onSubmit={handleSubmit}>
        <input
          type="text"
          className="h-[60px] w-full bg-black text-2xl p-4"
          placeholder="What&rsquo;s happening?"
          value={tweetText}
          onChange={(e) => setTweetText(e.target.value)}
        />
        <div className="flex justify-between items-center py-2">
          <div className="flex justify-start items-center gap-2">
            {tweetEditorActionsButtons.map((Btn) => (
              <button className="text-2xl text-sky-500" key={Btn.name}>
                <Btn.icon />
              </button>
            ))}
          </div>
          <Button actionType="submit">Tweet</Button>
        </div>
      </form>
    </div>
  );
}

export default TweetEditor;
