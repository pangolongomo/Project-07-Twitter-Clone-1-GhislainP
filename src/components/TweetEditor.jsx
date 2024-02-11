import Avatar from "./Avatar";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { PiChartBarHorizontalLight } from "react-icons/pi";
import { VscSmiley } from "react-icons/vsc";
import { TbCalendarStats } from "react-icons/tb";
import Button from "./Button";
import { useForm } from "react-hook-form";
import useFilePreview from "../hooks/useFilePreview";
import axios from "axios";
import { useAuthInfos } from "../context/authInfos";
import { useTweets } from "../context/tweetContext";

const tweetEditorActionsButtons = [
  { name: "image", activated: true, icon: CiImageOn },
  { name: "gif", activated: false, icon: MdOutlineGifBox },
  { name: "piChart", activated: false, icon: PiChartBarHorizontalLight },
  { name: "emoji", activated: false, icon: VscSmiley },
  { name: "calendar", activated: false, icon: TbCalendarStats },
];

function TweetEditor() {
  const { user } = useAuthInfos();
  const { setTweets } = useTweets();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const image = watch("image");
  const [filePreview, setFilePreview] = useFilePreview(image);

  function handleAddTweet(data) {
    const tweet = {
      id: Date.now().toString(),
      userId: user.id,
      tweetText: data.tweetText,
      tweetImage: filePreview || null,
      tweetAction: [
        { name: "message", count: 0 },
        { name: "repost", count: 0 },
        { name: "like", count: 0 },
        { name: "share" },
      ],
      date: new Date().toISOString(),
    };
    axios.post("http://localhost:8000/tweets", tweet).then((res) => {
      setTweets((prevTweet) => [...prevTweet, res.data]);
    });
    setFilePreview(null);
    reset();
  }

  return (
    <div className="flex py-2 px-4 gap-2 items-start">
      <Avatar userId={user.id} />
      <form
        className="flex-auto"
        onSubmit={handleSubmit((data) => handleAddTweet(data))}
      >
        <div className="w-full">
          <input
            type="text"
            className="h-[60px] w-full bg-black text-2xl p-4"
            placeholder="What&rsquo;s happening?"
            {...register("tweetText", {
              required: { value: true, message: "Ce champ est requis" },
              maxLength: { value: 128, message: "Ce tweet est trop long" },
              minLength: { value: 3, message: "Ce tweet est trop court" },
            })}
          />
          <p className="h-[24px] text-rose-600">
            {errors.tweetText && errors.tweetText.message}
          </p>
        </div>
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
