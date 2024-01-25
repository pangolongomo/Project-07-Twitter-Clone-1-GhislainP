import React from "react";
import {
  singleUserPosts,
  tweetsByUser,
  userFromUsername,
} from "../utils/userHelper";
import { useParams } from "react-router-dom";
import Avatar from "../components/Avatar";
import Button from "../components/Button";
import { LuCalendarDays } from "react-icons/lu";
import { getUserInfoIcons, joinDateFormatter } from "../utils/helper";
import Tweets from "../components/Tweets";
import UserNavigation from "../components/UserNavigation";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import AboutAuthor from "../components/AboutAuthor";

function Profile() {
  const { username } = useParams();
  const user = userFromUsername(username);

  const userTweets = user ? tweetsByUser(user.id) : null;
  const userPostsCount = user ? singleUserPosts(user.id).length : null;
  const IconDesc = user ? user.isCertified && RiVerifiedBadgeFill : null;
  return (
    <>
      <UserNavigation user={user} postsCount={userPostsCount} />
      <div className="w-full aspect-[3/1] bg-[#cfd9de]">
        {!user || !user.banner ? null : (
          <img
            className="w-full h-auto"
            src={user.banner}
            alt={`${user.name} banner`}
          />
        )}
      </div>
      <div className="flex flex-col py-4 px-4 gap-4">
        <div className="flex justify-between py-2">
          <div className="relative">
            <div className="w-[130px] aspect-[1/1] absolute -top-24 bg-[#f7f9f9] rounded-full">
              {user && <Avatar userId={user.id} width="w-full" />}
            </div>
          </div>
          {user && (
            <div className="flex gap-3 items-center">
              <Button bg="bg-transparent" border="border-2" padding="p-2">
                <HiOutlineDotsHorizontal />
              </Button>
              <Button color="text-[#202327]" bg="bg-white">
                Follow
              </Button>
            </div>
          )}
        </div>
        {user ? (
          <AboutAuthor
            userName={user.userName}
            IconDesc={IconDesc}
            name={user.name}
          />
        ) : (
          <div className="my-4 font-medium">@{username}</div>
        )}
        {user && (
          <>
            <div>{user.description && <p>{user.description}</p>}</div>
            <div className="flex gap-8 wrap leading-8">
              {user.userInfo &&
                user.userInfo.map((info) => {
                  const InfoIcon = getUserInfoIcons(info.type);
                  return (
                    <span key={info.type} className="flex items-center gap-1">
                      <InfoIcon />
                      {info.content}
                    </span>
                  );
                })}
              <span className="flex items-center gap-1">
                <LuCalendarDays /> A rejoint Twitter en{" "}
                {joinDateFormatter(user.created)}
              </span>
            </div>
            <div className="flex gap-16">
              <p>
                {user.subscription} abonnement{user.subscription > 1 && "s"}
              </p>
              <p>
                {user.subscriber} abonné{user.subscriber > 1 && "s"}
              </p>
            </div>
          </>
        )}
      </div>
      {!user && (
        <div className="flex justify-center">
          <div className="mt-12">
            <h2 className=" text-lg font-bold">Ce compte n'existe pas.</h2>
            <p className="text-gray-500">
              Essayez d'effectuer une autre recherche.
            </p>
          </div>
        </div>
      )}
      {user && <Tweets tweets={userTweets} />}
    </>
  );
}

export default Profile;
