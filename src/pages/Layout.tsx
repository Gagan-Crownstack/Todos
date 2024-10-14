import Leftbar from "../shared/components/Leftbar";
import Navbar from "../shared/components/Navbar";
import Rightbar from "../shared/components/Rightbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-11/12 mx-auto h-full">
      {/* Topbar */}
      <Navbar />
      {/* Dashboard */}
      <div className="flex h-full">
        <Leftbar />
        <div className="w-4/6 overflow-y-auto p-5">
          <Outlet />
        </div>
        <Rightbar />
      </div>
    </div>
  );
};

export default Layout;
