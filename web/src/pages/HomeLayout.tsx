import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import { useState } from "react";
import Form from "../components/Form";
import { useIsClicked } from "../context/IsClickedContext";

function HomeLayout() {
  const { isClicked, setIsClicked } = useIsClicked();

  const handleClick = () => {
    setIsClicked((isClicked) => !isClicked);
  };

  console.log({ isClicked });

  return (
    <div className="relative">
      <div
        className={`bg-second flex h-screen ${
          isClicked ? "blur-sm opacity-70" : ""
        }`}
      >
        <SideBar />
        <div className="w-full">
          <Outlet />
        </div>
      </div>
      {isClicked && <Form />}
    </div>
  );
}

export default HomeLayout;
