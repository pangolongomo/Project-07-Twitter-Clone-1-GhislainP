import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

export const UserContext = React.createContext(null);

export function useUsers() {
  return useContext(UserContext);
}

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function getLoggedInUser() {
    const loggedInUser = await axios.get(
      "http://localhost:4000/users/loggedIn"
    );
    setUser(loggedInUser.data);
    setIsLoading(false);
  }

  useEffect(() => {
    getLoggedInUser();
  }, []);
  if (isLoading) {
    return <div>is loading</div>;
  } else {
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
  }
}
