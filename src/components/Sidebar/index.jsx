import React from "react";
import SideNavigation from "../SideNavigation";
import styles from "./Sidebar.module.css";
import UserHighlight from "../UserHighlight";
import { RiLock2Fill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { isAuth } from "../../utils/userHelper";

function Sidebar() {
  const user = isAuth;
  return (
    <div className={styles.sidebar}>
      <div className={styles.container}>
        <SideNavigation />
        <UserHighlight
          avatarClass="avatar"
          userId={user.userId}
          IconDesc={RiLock2Fill}
        >
          <BsThreeDots />
        </UserHighlight>
      </div>
    </div>
  );
}

export default Sidebar;
