import React from "react";

import { useParams } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import UserProfile from "./UserProfile";
import NullUser from "./NullUser";

function Profile() {
  const { username } = useParams();
  const { data } = useFetch("current-user", { userName: username });
  const user = data && data[0];

  return user ? <UserProfile user={user} /> : <NullUser />;
}

export default Profile;
