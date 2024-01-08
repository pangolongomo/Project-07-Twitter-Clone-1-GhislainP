import { users } from "../models/users";
import { tweets } from "../models/tweets";

export const isAuth = users.filter((user) => user.loggedIn === true)[0];
export const userFromId = (userId) =>
  users.filter((user) => user.userId === userId)[0];
export const userFromUsername = (userName) =>
  users.filter((user) => user.userName === userName)[0];
export const tweetsByUser = (userId) =>
  tweets.filter((tweet) => tweet.userId === userId);

export const singleUserPosts = (userId) =>
  tweets.filter((t) => t.userId === userId);
