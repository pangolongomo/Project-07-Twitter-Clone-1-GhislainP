import React from "react";
import UserProvider from "./userContext";
import TweetProvider from "./tweetContext";
import AuthProvider from "./authInfos";

function MainContext({ children }) {
  return (
    <AuthProvider>
      <UserProvider>
        <TweetProvider>{children}</TweetProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default MainContext;