import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import Trends from "../Trends";
import styles from "./Layout.module.css";

function Layout() {
  return (
    <>
      <Sidebar />
      <main className={styles.timeline}>
        <Outlet />
      </main>
      <Trends />
    </>
  );
}

export default Layout;
