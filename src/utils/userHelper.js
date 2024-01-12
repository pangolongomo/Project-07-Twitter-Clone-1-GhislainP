import { users } from "../models/users";
import { tweets } from "../models/tweets";

export const isAuth = users.find((user) => user.loggedIn === true);
export const userFromId = (userId) =>
  users.find((user) => user.userId === userId);
export const userFromUsername = (userName) =>
  users.find((user) => user.userName === userName);
export const tweetsByUser = (userId) =>
  tweets.filter((tweet) => tweet.userId === userId);

export const singleUserPosts = (userId) =>
  tweets.filter((t) => t.userId === userId);
