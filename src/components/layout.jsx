import { Outlet } from "react-router-dom";
import("../style/Home.css");

function Layout() {
  return (
    <>
      <div className="left-sidebar" />
      <Outlet />
      <div className="right-sidebar" />
    </>
  );
}

export default Layout;
