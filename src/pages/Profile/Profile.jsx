import React from "react";

import { useParams } from "react-router-dom";

import UserProfile from "./UserProfile";
import NullUser from "./NullUser";
import { useUsers } from "../../context/userContext";

function Profile() {
  const { username } = useParams();

  const { getUserByUsername } = useUsers();
  const { users, isPending, error } = getUserByUsername(username);

  if (isPending) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>{error}</p>;
  } else if (users.length) {
    const user = users[0];
    return <UserProfile user={user} />;
  } else {
    return <NullUser />;
  }
}

export default Profile;
