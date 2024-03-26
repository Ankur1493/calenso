import React from "react";
import { Outlet } from "react-router-dom";
import Home from "./pages/Home";

function HomeLayout() {
  return (
    <div className="bg-second flex h-screen">
      <Home />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default HomeLayout;
