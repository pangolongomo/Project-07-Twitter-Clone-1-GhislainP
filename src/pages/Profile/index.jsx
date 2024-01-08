import React from "react";
import {
  singleUserPosts,
  tweetsByUser,
  userFromUsername,
} from "../../utils/userHelper";
import { useParams } from "react-router-dom";
import Avatar from "../../components/Avatar";
import Button from "../../components/Button";
import { TbLink } from "react-icons/tb";
import { LuCalendarDays } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { joinDateFormatter } from "../../utils/helper";
import Tweets from "../../components/Tweets";
import BackToPreviousRoot from "../../components/BackToPreviousRoot/BackToPreviousRoot";

function profile() {
  const { username } = useParams();
  const user = userFromUsername(username);
  const userTweets = tweetsByUser(user.userId);
  const userPostsCount = singleUserPosts(user.userId).length;
  return (
    <div>
      <div className="navig">
        <BackToPreviousRoot/>
        <div>
          <div>{user.name}</div>
          <div>
            {userPostsCount} post{userPostsCount > 1 && "s"}
          </div>
        </div>
      </div>
      <div className="banner">
        <img src={user.banner} alt={`${user.name} banner`} width="100%" />
      </div>
      <div className="userInfoSection">
        <div>
          <Avatar avatarClass="avatar" userId={user.userId} />
          <Button type={4}>Éditer le profil</Button>
        </div>
        <div>
          <h2>{user.name}</h2>
          <p>@{user.userName}</p>
        </div>
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
        {userPostsCount  && (
          <div className="post">
            <Tweets tweets={userTweets} />
          </div>
        )}
      </div>
    </div>
  );
}

export default profile;
