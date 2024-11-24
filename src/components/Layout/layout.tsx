import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import { useState } from "react";

const Layout: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  // Remove token check for now
  return (
    <div className="flex h-screen">
      <Sidebar setActiveMenu={setActiveMenu} />
      <div className="flex-1 flex flex-col">
        {/* <Header activeMenu={activeMenu} /> */}
        <main className="flex-1 overflow-auto bg-gray-100 p-4 sm:p-2 rounded-lg shadow-sm">
          <div className="h-full overflow-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
