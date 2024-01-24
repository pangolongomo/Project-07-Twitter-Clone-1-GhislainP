import Avatar from "./Avatar";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { PiChartBarHorizontalLight } from "react-icons/pi";
import { VscSmiley } from "react-icons/vsc";
import { TbCalendarStats } from "react-icons/tb";
import Button from "./Button";
import { isAuth } from "../utils/userHelper";
import { useTweets } from "../context/tweetContext";
import { useEffect, useState } from "react";
import { REDUCER_ACTIONS } from "../utils/actions.json";

const tweetEditorActionsButtons = [
  { name: "image", activated: true, icon: CiImageOn },
  { name: "gif", activated: false, icon: MdOutlineGifBox },
  { name: "piChart", activated: false, icon: PiChartBarHorizontalLight },
  { name: "emoji", activated: false, icon: VscSmiley },
  { name: "calendar", activated: false, icon: TbCalendarStats },
];

function TweetEditor() {
  const [tweetText, setTweetText] = useState("");
  const [tweetImage, setTweetImage] = useState(null);
  const [formValid, setFormValid] = useState(false);
  const user = isAuth();
  const { dispatch } = useTweets();

  useEffect(() => {
    if (!tweetText.trim() && !tweetImage) {
      return setFormValid(false);
    }
    setFormValid(true);
  }, [tweetText, tweetImage]);

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file && e.target.id === "image") {
      const reader = new FileReader();
      reader.onloadend = () => setTweetImage(reader.result);
      reader.readAsDataURL(file);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formValid) {
      dispatch({
        type: REDUCER_ACTIONS.ADD_TWEET,
        payload: {
          tweetText: tweetText.trim(),
          id: user.id,
          tweetImage: tweetImage,
        },
      });
    }
    setTweetText("");
    setTweetImage(null);
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
            {tweetEditorActionsButtons.map((Btn) => {
              return (
                <div className="text-2xl text-sky-500" key={Btn.name}>
                  <label htmlFor={Btn.name} className="cursor-pointer">
                    <Btn.icon />
                  </label>
                  {Btn.activated && (
                    <input
                      type="file"
                      id={Btn.name}
                      name={Btn.name}
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  )}
                </div>
              );
            })}
          </div>
          <Button actionType="submit" disabled={!formValid}>
            Tweet
          </Button>
        </div>

        {tweetImage && (
          <div className="h-10">
            <img src={tweetImage} alt="" className="h-full" />
          </div>
        )}
      </form>
    </div>
  );
}

export default TweetEditor;
