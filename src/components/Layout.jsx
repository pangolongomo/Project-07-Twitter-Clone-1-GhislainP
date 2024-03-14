import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Trends from "./Trends";
import UserProvider from "../context/userContext";

function Layout() {
  return (
    <UserProvider>
      <div className="mx-auto grid grid-cols-9 bg-black text-white divide-x divide-[#2f3336]">
        <Sidebar />
        <main className="col-span-5 divide-y divide-[#2f3336]">
          <Outlet />
        </main>
        <Trends />
      </div>
    </UserProvider>
  );
}

export default Layout;
