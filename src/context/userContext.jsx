import React, { useContext, useReducer } from "react";
import data from "../data/initial-data.json";

const UserContext = React.createContext(null);

export const ACTIONS = {};

export function useUsers() {
  return useContext(UserContext);
}

function reducer(users, action) {}

export default function UserProvider({ children }) {
  const [users, dispatch] = useReducer(reducer, data["current-user"]);

  const value = { users, dispatch };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
