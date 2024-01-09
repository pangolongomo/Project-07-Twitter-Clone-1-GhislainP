import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Trends from "../Trends/Trends";
import { CurrentUserContext } from "../../utils/ContextHandler";
import { isAuth } from "../../utils/userHelper";

function Layout() {
  return (
    <CurrentUserContext.Provider value={isAuth}>
      <div className="mx-auto grid grid-cols-9 p-4 bg-black text-white divide-x divide-stone-600">
        <Sidebar />
        <main className="col-span-5 divide-y  divide-stone-600">
          <Outlet />
        </main>
        <Trends />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default Layout;
