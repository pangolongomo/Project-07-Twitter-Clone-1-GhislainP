import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Trends from "./Trends";

function Layout() {
  return (
    <>
      <Sidebar />
      <Outlet />
      <Trends />
    </>
  );
}

export default Layout;
