import React from "react";

import { useParams } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import UserProfile from "./UserProfile";
import NullUser from "./NullUser";

function Profile() {
  const { username } = useParams();
  const { data, isPending, error } = useFetch("current-user", {
    userName: username,
  });
  const user = data && data[0];

  if (isPending) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>{error}</p>;
  } else if (data) {
    const user = data[0];
    return <UserProfile user={user} />;
  } else {
    return <NullUser />;
  }
}

export default Profile;
