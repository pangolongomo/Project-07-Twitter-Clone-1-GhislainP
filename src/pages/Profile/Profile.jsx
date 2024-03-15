import React from "react";

import { useParams } from "react-router-dom";

import UserProfile from "./UserProfile";
import NullUser from "./NullUser";
import useFetch from "../../hooks/useFetch";

function Profile() {
  const { handle } = useParams();
  const { data: user, loading, error } = useFetch(`/user/h/${handle}`);

  if (loading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <div>something went wrong.</div>;
  }
  if (!user) {
    return <NullUser />;
  }
  return <UserProfile user={user} />;
}

export default Profile;
