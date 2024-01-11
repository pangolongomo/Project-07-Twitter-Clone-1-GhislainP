import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Trends from "../Trends/Trends";
import { CurrentUserContext } from "../../utils/ContextHandler";
import { isAuth } from "../../utils/userHelper";

function Layout() {
  return (
    <CurrentUserContext.Provider value={isAuth}>
      <div className="mx-auto grid grid-cols-9 bg-black text-white divide-x divide-[#2f3336]">
        <Sidebar />
        <main className="col-span-5 divide-y divide-[#2f3336]">
          <Outlet />
        </main>
        <Trends />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default Layout;
