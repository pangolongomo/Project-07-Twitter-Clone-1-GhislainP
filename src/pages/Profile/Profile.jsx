import React from "react";
import {
  singleUserPosts,
  tweetsByUser,
  userFromUsername,
} from "../../utils/userHelper";
import { useParams } from "react-router-dom";
import Avatar from "../../components/Avatar/Avatar";
import Button from "../../components/Button/Button";
import { TbLink } from "react-icons/tb";
import { LuCalendarDays } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { joinDateFormatter } from "../../utils/helper";
import Tweets from "../../components/Tweets";
import UserNavigation from "../../components/UserNavigation/UserNavigation";
import styles from "./Profile.module.css";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import AboutAuthor from "../../components/AboutAuthor/AboutAuthor";

function Profile() {
  const { username } = useParams();
  const user = userFromUsername(username);
  const userTweets = tweetsByUser(user.userId);
  const userPostsCount = singleUserPosts(user.userId).length;
  const IconDesc = user.isCertified && RiVerifiedBadgeFill;
  return (
    <>
      <UserNavigation user={user} postsCount={userPostsCount} />
      <div>
        <img
          className="w-full h-auto"
          src={user.banner}
          alt={`${user.name} banner`}
        />
      </div>
      <div className="flex flex-col py-2 px-4">
        <div className="flex justify-between py-2">
          <div className="relative">
            <Avatar userId={user.userId} width="w-[130px]" position="absolute -top-24 " />
          </div>
          <div className="flex gap-3 items-center">
            <Button bg="bg-transparent" border="border-2" padding="p-2">
              <HiOutlineDotsHorizontal />
            </Button>
            <Button color="text-[#202327]" bg="bg-white">
              Follow
            </Button>
          </div>
        </div>
        <AboutAuthor
          userName={user.userName}
          IconDesc={IconDesc}
          name={user.name}
        />
        <div>{user.description && <p>{user.description}</p>}</div>
        <div>
          {user.profession && (
            <span>
              <GrLocation />
              {user.profession}
            </span>
          )}
          {user.location && (
            <span>
              <GrLocation />
              {user.location}
            </span>
          )}
          {user.website && (
            <span>
              <TbLink />
              <a href={user.website}>{user.website}</a>
            </span>
          )} 
          <span>
            <LuCalendarDays /> A rejoint Twitter en{" "}
            {joinDateFormatter(user.created)}
          </span>
        </div>
        <div>
          <p>
            {user.subscription} abonnement{user.subscription > 1 && "s"}
          </p>
          <p>
            {user.subscriber} abonné{user.subscriber > 1 && "s"}
          </p>
        </div>
      </div>
      <div className="posts">
        {userPostsCount && (
          <div className="post">
            <Tweets tweets={userTweets} />
          </div>
        )}
      </div>
    </>
  );
}

export default Profile;
