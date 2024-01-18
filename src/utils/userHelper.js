import { tweetsData } from "../models/tweets";
import { useUsers } from "../context/userContext";
import { useAuthInfos } from "../context/authInfos";

export const isAuth = () => {
  const { users } = useUsers();
  const { loginedUserid } = useAuthInfos();
  return users.find((user) => user.id === loginedUserid);
};

export const userFromId = (userId) => {
  const { users } = useUsers();
  return users.find((user) => user.id === userId);
};

export const userFromUsername = (userName) => {
  const { users } = useUsers();
  return users.find((user) => user.userName === userName);
};

export const tweetsByUser = (userId) =>
  tweetsData.filter((tweet) => tweet.userId === userId);

export const singleUserPosts = (userId) =>
  tweetsData.filter((t) => t.userId === userId);
