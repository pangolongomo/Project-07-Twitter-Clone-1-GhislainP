import React from "react";
import SideNavigation from "../SideNavigation";
import styles from "./Sidebar.module.css";
import UserHighlight from "../UserHighlight";
import { RiLock2Fill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";


function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.container}>
        <SideNavigation />
        <UserHighlight
          avatarClass="avatar"
          userId={5}
          IconDesc={RiLock2Fill}
        >
          <BsThreeDots />
        </UserHighlight>
      </div>
    </div>
  );
}

export default Sidebar;
