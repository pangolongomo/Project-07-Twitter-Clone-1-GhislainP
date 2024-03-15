import React, { useContext } from "react";
import useFetch from "../hooks/useFetch";

export const UserContext = React.createContext(null);

export function useUsers() {
  return useContext(UserContext);
}

export default function UserProvider({ children }) {
  const endpoint = `/users/auth`;
  const { data: user, error, loading } = useFetch(endpoint);

  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>something went wrong</div>;
  }

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
