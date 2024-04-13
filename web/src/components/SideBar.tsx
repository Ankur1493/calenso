import LogoutProfile from "./LogoutProfile";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import Logout from "../Hooks/Logout";
import SideLinks from "./SideLinks";
import { sideLinks as navOptions } from "../constants/constants";

function SideBar() {
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const { handleLogout } = Logout();

  return (
    <div className="bg-sidebar flex h-screen">
      <div className="flex flex-col justify-between border-r-2 border-secondText w-60 gap-3">
        <div>
          <div className="flex justify-center align-center py-6 pb-4">
            <LogoutProfile username={userInfo.username} profileUrl={userInfo.profilePicture ? userInfo.profilePicture : null} />
          </div>
          <div>
            <SideLinks {...navOptions[0].eventTypes} />
          </div>
          <div>
            <SideLinks {...navOptions[1].bookings} />
          </div>
          <div className="mb-4">
            <div className="p-2">
              <button
                id="logout"
                className="text-left [&amp;[aria-current='page']]:bg-emphasis text-default justify-right group flex items-center rounded-md px-8 gap-2 py-2 font-medium transition [&amp;[aria-current='page']]:text-emphasis mt-0.5 w-full text-sm hover:text-emphasis hover:bg-input hover:bg-opacity-40 "
                onClick={handleLogout}
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
                  className="h-4 w-4 flex-shrink-0 [&amp;[aria-current='page']]:text-inherit me-3 md:mx-auto lg:ltr:mr-2 lg:rtl:ml-2 text-mainText"
                  aria-hidden="true"
                >
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z "></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <span className="hidden w-full justify-between text-[19px] lg:flex">
                  <div className="flex text-mainText">Logout</div>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
