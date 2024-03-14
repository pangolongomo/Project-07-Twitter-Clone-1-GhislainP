import React from "react";
import SideNavigation from "./SideNavigation";
import UserHighlight from "./UserHighlight";
import { RiLock2Fill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { useUsers } from "../context/userContext";

function Sidebar() {
  const loggedInUser = useUsers();
  return (
    <div className="col-span-2 flex flex-col justify-between h-screen p-4 sticky top-0">
      <SideNavigation />
      <UserHighlight user={loggedInUser} IconDesc={RiLock2Fill}>
        <BsThreeDots />
      </UserHighlight>
    </div>
  );
}

export default Sidebar;
