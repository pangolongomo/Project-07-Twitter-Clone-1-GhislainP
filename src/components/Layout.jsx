import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Trends from "./Trends";
import MainContext from "../context/mainContext";

function Layout() {
  return (
    <MainContext>
      <div className="mx-auto grid grid-cols-9 bg-black text-white divide-x divide-[#2f3336]">
        <Sidebar />
        <main className="col-span-5 divide-y divide-[#2f3336]">
          <Outlet />
        </main>
        <Trends />
      </div>
    </MainContext>
  );
}

export default Layout;
