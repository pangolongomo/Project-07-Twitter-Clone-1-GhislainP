import { users } from "../models/users";

export const isAuth = users.filter((user) => user.loggedIn === true)[0];
export const userFromId = (userId) =>
  users.filter((user) => user.userId === userId)[0];
