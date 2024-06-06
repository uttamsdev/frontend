import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
    // flex-[1] mane screen er 1 vag sidebar flex-[3] 3 vag Outlet ba content
  return (
    <div className="flex"> 
      <div className="flex-[1]">
        <Sidebar />
      </div>
      <div className="flex-[5]">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
