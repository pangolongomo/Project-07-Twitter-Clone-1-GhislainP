import React from "react";
import SideNavigation from "./SideNavigation";
import UserHighlight from "./UserHighlight";
import { RiLock2Fill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { useAuthInfos } from "../context/authInfos";

function Sidebar() {
  const { loginedUserid } = useAuthInfos();
  return (
    <div className="col-span-2 flex flex-col justify-between h-screen p-4 sticky top-0">
      <SideNavigation />
      <UserHighlight userId={loginedUserid} IconDesc={RiLock2Fill}>
        <BsThreeDots />
      </UserHighlight>
    </div>
  );
}

export default Sidebar;
