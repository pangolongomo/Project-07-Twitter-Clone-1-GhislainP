import React from "react";
import SideNavigation from "../SideNavigation";
import styles from "./Sidebar.module.css";
import UserHighlight from "../UserHighlight";
import { RiLock2Fill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { users } from "../../models/users";

function Sidebar() {
  const user = users.filter((user) => user.loggedIn === true)[0];
  console.log(user);
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
