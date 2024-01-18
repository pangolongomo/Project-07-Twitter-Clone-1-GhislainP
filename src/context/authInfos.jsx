import React, { useContext } from "react";

const AuthContext = React.createContext(null);

export function useAuthInfos() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const loginedUserid = 5;
  const value = { loginedUserid };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
