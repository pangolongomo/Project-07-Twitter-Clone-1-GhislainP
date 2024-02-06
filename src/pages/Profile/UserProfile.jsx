import React from "react";
import useFetch from "../../hooks/useFetch";
import UserNavigation from "../../components/UserNavigation";
import Avatar from "../../components/Avatar";
import Button from "../../components/Button";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import AboutAuthor from "../../components/AboutAuthor";
import { LuCalendarDays } from "react-icons/lu";
import { getUserInfoIcons, joinDateFormatter } from "../../utils/helper";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Tweets from "../../components/Tweets";

function UserProfile({ user }) {
  const {
    data: userTweets,
    error,
    isPending,
  } = useFetch("tweets", { userId: user.id });

  // const IconDesc = user ? user.isCertified && RiVerifiedBadgeFill : null;

  const userNavigation = () => {
    if (userTweets) {
      return <UserNavigation user={user} postsCount={userTweets.length} />;
    }
    return <UserNavigation user={user} />;
  };

  return (
    <>
      {userNavigation}
      <div className="w-full aspect-[3/1] bg-[#cfd9de]">
        {user.banner && (
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
              <Avatar userId={user.id} width="w-full" />
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
          userName={user.userName}
          IconDesc={user.isCertified && RiVerifiedBadgeFill}
          name={user.name}
        />

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
      </div>
      {userTweets && <Tweets tweets={userTweets} />}
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
    </>
  );
}

export default UserProfile;
