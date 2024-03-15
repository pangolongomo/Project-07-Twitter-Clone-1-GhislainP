import React from "react";
import UserNavigation from "../../components/UserNavigation";
import Avatar from "../../components/Avatar";
import Button from "../../components/Button";
import AboutAuthor from "../../components/AboutAuthor";

import { joinDateFormatter } from "../../utils/helper";

import { LuCalendarDays } from "react-icons/lu";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { GrLocation } from "react-icons/gr";
import { TbLink } from "react-icons/tb";
import useFetch from "../../hooks/useFetch";
import Tweets from "../../components/Tweets";

function UserProfile({ user }) {
  const endpoint = `/user/t/${user.id}`;
  const { data: userTweets, error, loading } = useFetch(endpoint);

  return (
    <>
      {userTweets && (
        <UserNavigation user={user} postsCount={userTweets.length} />
      )}
      <div className="w-full aspect-[3/1] bg-[#cfd9de]">
        {user.profileBackground && (
          <img
            className="w-full h-auto"
            src={user.profileBackground}
            alt={`${user.name} banner`}
          />
        )}
      </div>
      <div className="flex flex-col py-4 px-4 gap-4">
        <div className="flex justify-between py-2">
          <div className="relative">
            <div className="w-[130px] aspect-[1/1] absolute -top-24 bg-[#f7f9f9] rounded-full">
              <Avatar
                handle={user.handle}
                profilePicture={user.profilePicture}
                width="w-full"
              />
            </div>
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
          handle={user.handle}
          IconDesc={RiVerifiedBadgeFill}
          name={user.name}
        />
        <div>{user.bio && <p>{user.bio}</p>}</div>
        <div className="flex gap-8 wrap leading-8">
          <span className="flex items-center gap-1">
            <GrLocation />
            {user.location}
          </span>
          <span className="flex items-center gap-1">
            <TbLink />
            {user.website}
          </span>
          <span className="flex items-center gap-1">
            <LuCalendarDays /> A rejoint Twitter en{" "}
            {joinDateFormatter(user.createdAt)}
          </span>
        </div>

        <div className="flex gap-16">
          <p>
            {user.followingCount} abonnement{user.followingCount > 1 && "s"}
          </p>
          <p>
            {user.followersCount} abonné{user.followersCount > 1 && "s"}
          </p>
        </div>
      </div>
      {loading && <div>loading...</div>}
      {error && <div>something went wrong.</div>}
      userTweets &&
      <Tweets tweets={userTweets} />
    </>
  );
}

export default UserProfile;
