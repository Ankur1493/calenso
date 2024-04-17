import { useState } from "react";
import Logout from "../Hooks/Logout";

const LogoutProfile = ({
  name,
  profileUrl,
}: {
  name: string;
  profileUrl?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const { handleLogout } = Logout();
  return (
    <div className="relative">
      <button
        className="bg-second text-white font-bold mt-2 lg:w-40 py-1 px-3 rounded-[8px] text-[20px] inline-flex items-center hover:bg-input hover:bg-opacity-40"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={profileUrl} className="w-6 rounded-[20px] mr-3" />
        <span className="font-heading mr-1">{name}</span>
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
      </button >
      {isOpen && (
        <div className="origin-top-right absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-second ring-1 ring-black ring-opacity-5">
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              onClick={handleLogout}
              className="block h-1/2 w-full text-left rounded-b-md px-4 py-2 text-sm text-mainText font-heading hover:bg-input hover:bg-opacity-40"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div >
  );
};

export default LogoutProfile;
