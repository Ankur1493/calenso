import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import { useState } from "react";
import Form from "../components/Form";
import { toggleIsClicked } from "../slices/isClickedSlice";
import { useDispatch, useSelector } from "react-redux";

function HomeLayout() {
  const dispatch = useDispatch();
  const isClicked = useSelector((state) => state.isClicked.isClicked);

  const handleClick = () => {
    dispatch(toggleIsClicked());
  };

  return (
    <div className="relative">
      <div
        className={`bg-second flex h-screen ${
          isClicked ? "blur-sm opacity-90" : ""
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
