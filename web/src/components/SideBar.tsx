import LogoutProfile from "./LogoutProfile";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import Logout from "../Hooks/Logout";
import SideLinks from "./SideLinks";
import { sideLinks as navOptions } from "../constants/constants";

function SideBar() {
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const { handleLogout } = Logout();
  const Storage = JSON.parse(localStorage.getItem("userInfo") || "{}");
  const first = Storage?.firstName || null;

  return (
    <div className="bg-sidebar flex h-screen md:static">
      <div className="flex flex-col justify-between border-r-2 border-secondText w-full gap-3">
        <div>
          <div className="flex justify-center align-center py-6 pb-4">
            <LogoutProfile
              name={first || userInfo.firstName || userInfo.username}
              profileUrl={
                userInfo.profilePicture ? userInfo.profilePicture : null
              }
            />
          </div>
          <div>
            <div>
              <SideLinks {...navOptions[0].eventTypes} />
            </div>
            <div>
              <SideLinks {...navOptions[1].bookings} />
            </div>
            <div>
              <SideLinks {...navOptions[2].bookingPage} />
            </div>
            <div>
              <SideLinks {...navOptions[3].landingPage} />
            </div>
          </div>
        </div>
        <div className="p-2 px-5 mb-6 flex justify-center items-center">
          <button
            id="logout"
            className="border text-[24px] text-white hover:text-black [&amp;[aria-current='page']]:bg-emphasis text-default group flex items-center justify-center rounded-[30px] gap-2 py-3 font-medium transition [&amp;[aria-current='page']]:text-emphasis mt-0.5 w-full text-sm hover:text-emphasis hover:bg-input hover:bg-opacity-70"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
