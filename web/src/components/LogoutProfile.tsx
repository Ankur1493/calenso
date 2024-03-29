import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { removeCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Logout from "../Hooks/Logout";

const LogoutProfile = ({ username }: { username: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { handleLogout } = Logout();
  return (
    <div className="relative">
      <button
        className="bg-second text-white font-bold mt-2 w-40 py-1 px-6 rounded-[8px] text-[20px] inline-flex items-center hover:bg-input hover:bg-opacity-40"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{username}</span>
        <svg
          className=" w-full h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="origin-top-right absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="#profile"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Profile
            </a>
            <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer">
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogoutProfile;
