import React, { useContext } from "react";
import useData from "../hooks/useData";

const AuthContext = React.createContext(null);

export function useAuthInfos() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const loggedInUserid = 5;
  const {
    data: user,
    isPending,
    error,
  } = useData(`current-user/${loggedInUserid}`);

  if (isPending) {
    return <div>Loading...</div>;
  } else if (error) {
    <div>{error}</div>;
  } else {
    return (
      <AuthContext.Provider value={{ user, loggedInUserid }}>
        {children}
      </AuthContext.Provider>
    );
  }
}

export default AuthProvider;
