import { useUsers } from "../context/userContext";
import { useAuthInfos } from "../context/authInfos";
import { useTweets } from "../context/tweetContext";

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

export const tweetsByUser = (userId) => {
  const { tweets } = useTweets();
  return tweets.filter((tweet) => tweet.userId === userId);
};

export const singleUserPosts = (userId) => {
  const { tweets } = useTweets();
  return tweets.filter((t) => t.userId === userId);
};

export const sortByDate = (arr) => {
  return arr.sort((a, b) => new Date(b.date) - new Date(a.date));
};
