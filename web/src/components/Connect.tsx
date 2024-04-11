import React from "react";
import calender_img from "../assets/images/calender_img.png";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useDispatch } from "react-redux";
import { IsConnecClicked } from "../slices/isClickedSlice";

function Connect() {
  const dispatch = useDispatch();

  const handleConnectClick = () => {
    dispatch(IsConnecClicked());
  };

  return (
    <div className="flex justify-center fixed inset-0 items-center z-20">
      <div className="bg-second px-8 pt-4 w-[450px] rounded-2xl border border-gray-400 ">
        <div className="flex items-end justify-end">
          <button
            className="inline-flex items-center bg-input bg-opacity-10 text-sm font-medium relative rounded-md text-mainText h-9 px-4 py-2.5 whitespace-nowrap "
            data-testid="cancel"
            onClick={handleConnectClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-x h-4 w-4 stroke-[1.5px] ltr:-ml-1 ltr:mr-2 rtl:-mr-1 rtl:ml-2"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col justify-top items-center">
          <div className="pt-4">
            <h3 className="font-semibold text-center font-heading text-mainText pb-1 text-3xl">
              Connect Your Calender
            </h3>
          </div>
          <div className="w-full bg-input bg-opacity-10 rounded-md h-80 mt-2 flex justify-top">
            <img
              src={calender_img}
              alt=""
              className="w-full h-full justify-top"
            />
          </div>
          <div className="flex justify-end space-x-2 pb-6 pt-4 items-end">
            <button
              type="submit"
              className="inline-flex items-end text-sm font-medium relative rounded-md transition h-9 px-4 py-2.5 bg-mainText text-main font-heading hover:bg-opacity-80"
            >
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connect;
