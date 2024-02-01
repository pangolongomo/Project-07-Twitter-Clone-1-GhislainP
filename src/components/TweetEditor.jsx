import Avatar from "./Avatar";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { PiChartBarHorizontalLight } from "react-icons/pi";
import { VscSmiley } from "react-icons/vsc";
import { TbCalendarStats } from "react-icons/tb";
import Button from "./Button";
import { isAuth } from "../utils/userHelper";
import { useTweets } from "../context/tweetContext";
import { useState } from "react";
import { REDUCER_ACTIONS } from "../utils/actions.json";
import { useForm } from "react-hook-form";
import useFilePreview from "../hooks/useFilePreview";

const tweetEditorActionsButtons = [
  { name: "image", activated: true, icon: CiImageOn },
  { name: "gif", activated: false, icon: MdOutlineGifBox },
  { name: "piChart", activated: false, icon: PiChartBarHorizontalLight },
  { name: "emoji", activated: false, icon: VscSmiley },
  { name: "calendar", activated: false, icon: TbCalendarStats },
];

function TweetEditor() {
  const user = isAuth();
  const { dispatch } = useTweets();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const image = watch("image");
  console.log(image);
  const [filePreview] = useFilePreview(image);

  function handleAddTweet(data) {
    if (data.tweetText || data.tweetImage) {
      dispatch({
        type: REDUCER_ACTIONS.ADD_TWEET,
        payload: {
          tweetText: data.tweetText,
          id: user.id,
          tweetImage: filePreview,
        },
      });
    }
  }
  return (
    <div className="flex py-2 px-4 gap-2 items-start">
      <Avatar userId={user.id} />
      <form
        className="flex-auto"
        onSubmit={handleSubmit((data) => handleAddTweet(data))}
      >
        <input
          type="text"
          className="h-[60px] w-full bg-black text-2xl p-4"
          placeholder="What&rsquo;s happening?"
          {...register("tweetText")}
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
                      className="hidden"
                      {...register(Btn.name)}
                    />
                  )}
                </div>
              );
            })}
          </div>
          <Button actionType="submit">Tweet</Button>
        </div>

        {filePreview && (
          <div className="h-10">
            <img src={filePreview} alt="" className="h-full" />
          </div>
        )}
      </form>
    </div>
  );
}

export default TweetEditor;
