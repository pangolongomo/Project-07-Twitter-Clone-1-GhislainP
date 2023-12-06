import React from "react";
import SideNavigation from "../SideNavigation";
import styles from "./Sidebar.module.css";
import UserHighlight from "../UserHighlight";
import { avatarImage } from "../../model/images";
import { RiLock2Fill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.container}>
      <SideNavigation />
      <UserHighlight
        avatarClass="avatar"
        avatarImage={avatarImage}
        authorName="Bradley Ortiz"
        authorUsername="bradley_"
        authorDescritionIcon={RiLock2Fill}
        actionButton={BsThreeDots}
      />
      </div>
    </div>
  );
}

export default Sidebar;
