import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

function HomeLayout() {
  return (
    <div className="bg-second flex h-screen">
      <SideBar />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default HomeLayout;
