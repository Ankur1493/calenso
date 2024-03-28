import LogoutProfile from "./LogoutProfile";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "../Hooks/Logout";

function SideBar() {
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const { handleLogout } = Logout();

  return (
    <div className="bg-sidebar flex h-screen">
      <div className="flex flex-col justify-between border-r-2 border-secondText w-60 gap-3">
        <div>
          <div className="flex justify-center align-center pb-4">
            <LogoutProfile username={userInfo.username} />
          </div>
          <div>
            <div className="px-1 text-[20px]">
              <Link
                to="event-types"
                className="todesktop:py-[7px] text-default group flex items-center rounded-md px-8 py-2 font-medium transition [&amp;[aria-current='page']]:bg-emphasis [&amp;[aria-current='page']]:text-emphasis mt-0.5 text-sm hover:bg-subtle todesktop:[&amp;[aria-current='page']]:bg-emphasis hover:bg-input hover:bg-opacity-40 hover:text-emphasis "
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
                  className="todesktop:!text-blue-500 mr-2 h-4 w-4 flex-shrink-0 rtl:ml-2 md:ltr:mx-auto lg:ltr:mr-2 [&amp;[aria-current='page']]:text-inherit text-white"
                  aria-hidden="true"
                  aria-current="page"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
                <span
                  className="hidden w-full justify-between truncate text-[20px] text-heading lg:flex text-mainText"
                  data-testid="event_types_page_title-test"
                >
                  Event Types
                </span>
              </Link>
            </div>
            <div className="px-1">
              <Link
                to="bookings"
                className="todesktop:py-[7px] text-default group flex items-center rounded-md px-8 py-2 font-medium transition [&amp;[aria-current='page']]:bg-emphasis [&amp;[aria-current='page']]:text-emphasis mt-0.5 text-sm hover:bg-subtle todesktop:[&amp;[aria-current='page']]:bg-emphasis hover:bg-input hover:bg-opacity-40 hover:text-emphasis "
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
                  className="todesktop:!text-blue-500 mr-2 h-4 w-4 flex-shrink-0 rtl:ml-2 md:ltr:mx-auto lg:ltr:mr-2 [&amp;[aria-current='page']]:text-inherit text-mainText"
                  aria-hidden="true"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                  <line x1="16" x2="16" y1="2" y2="6"></line>
                  <line x1="8" x2="8" y1="2" y2="6"></line>
                  <line x1="3" x2="21" y1="10" y2="10"></line>
                </svg>
                <span
                  className="hidden w-full justify-between truncate text-[20px] text-ellipsis lg:flex text-mainText"
                  data-testid="event_types_page_title-test"
                >
                  Bookings
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div>
            <a
              id="settings"
              className="text-left [&amp;[aria-current='page']]:bg-emphasis text-default justify-right group flex items-center rounded-md px-8 gap-2 py-2 font-medium transition [&amp;[aria-current='page']]:text-emphasis mt-0.5 w-full text-sm hover:text-emphasis hover:bg-input hover:bg-opacity-40 "
              data-state="instant-open"
              href="/settings/my-account/profile"
              aria-describedby="radix-:r6n:"
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
              <span className="hidden w-full justify-between lg:flex">
                <div className="flex text-mainText text-[20px]">Settings</div>
              </span>
            </a>
          </div>
          <div>
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
              <span className="hidden w-full justify-between text-[20px] lg:flex">
                <div className="flex text-mainText">Logout</div>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
