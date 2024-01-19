import Avatar from "./Avatar";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { PiChartBarHorizontalLight } from "react-icons/pi";
import { VscSmiley } from "react-icons/vsc";
import { TbCalendarStats } from "react-icons/tb";
import Button from "./Button";
import { isAuth } from "../utils/userHelper";
import { ACTIONS, useTweets } from "../context/tweetContext";
import { useEffect, useState } from "react";

const tweetEditorActionsButtons = [
  { name: "image", icon: CiImageOn },
  { name: "gif", icon: MdOutlineGifBox },
  { name: "piChart", icon: PiChartBarHorizontalLight },
  { name: "emoji", icon: VscSmiley },
  { name: "calendar", icon: TbCalendarStats },
];

function TweetEditor() {
  const [tweetText, setTweetText] = useState("");
  const [formValid, setFormValid] = useState(false);
  const user = isAuth();
  const { dispatch } = useTweets();

  useEffect(() => {
    if (tweetText.trim() !== "") setFormValid(true);
    else setFormValid(false);
  }, [tweetText]);

  function handleSubmit(e) {
    e.preventDefault();
    if (tweetText.trim() === "") return;
    dispatch({
      type: ACTIONS.ADD_TWEET,
      payload: { tweetText: tweetText, id: user.id, tweetImage: null },
    });
    setTweetText("");
  }
  return (
    <div className="flex py-2 px-4 gap-2 items-start">
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
          <Button actionType="submit" disabled={!formValid}>
            Tweet
          </Button>
        </div>
      </form>
    </div>
  );
}

export default TweetEditor;
