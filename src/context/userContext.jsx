import React, { useContext } from "react";
import useData from "../hooks/useData";

const UserContext = React.createContext(null);

export function useUsers() {
  return useContext(UserContext);
}

export default function UserProvider({ children }) {
  function getUserById(userId) {
    const {
      data: user,
      isPending,
      error,
      setData: setUser,
    } = useData(`current-user/${userId}`);
    return { user, setUser, isPending, error };
  }
  function getUserByUsername(username) {
    const {
      data: users,
      isPending,
      error,
      setData: setUsers,
    } = useData("current-user", { userName: username });
    return { users, setUsers, isPending, error };
  }

  return (
    <UserContext.Provider value={{ getUserById, getUserByUsername }}>
      {children}
    </UserContext.Provider>
  );
}
