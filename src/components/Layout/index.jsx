import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import Trends from "../Trends";
import styles from "./Layout.module.css";
import { CurrentUserContext } from "../../utils/ContextHandler";
import { isAuth } from "../../utils/userHelper";

function Layout() {
  return (
    <CurrentUserContext.Provider value={isAuth}>
      <Sidebar />
      <main className={styles.timeline}>
        <Outlet />
      </main>
      <Trends />
    </CurrentUserContext.Provider>
  );
}

export default Layout;
