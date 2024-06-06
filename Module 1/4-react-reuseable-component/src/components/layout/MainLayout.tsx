import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      {/* outlet er moddhe sob entry point render hobe  */}
      <Outlet />
    </div>
  );
};

export default MainLayout;
