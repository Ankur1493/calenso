import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store.ts";
import CreateMeeting from "../components/CreateMeeting.tsx";
import { IsConnectClicked } from "../slices/isClickedSlice.ts";
import Connect from "../components/Connect.tsx";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SideBar from "../components/SideBar";

function HomeLayout() {
  const dispatch = useDispatch();

  const isMeetingClicked = useSelector(
    (state: RootState) => state.isClicked.isMeetingFormClicked
  );
  const isConnectClicked = useSelector(
    (state: RootState) => state.isClicked.isConnectClicked
  );
  const isConnected = useSelector(
    (state: RootState) => state.isClicked.isConnected
  );

  const [isSidebarVisible, setSidebarVisible] = useState(
    window.innerWidth >= 768
  );

  useEffect(() => {
    const handleResize = () => {
      setSidebarVisible(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let intervalId: number | undefined;
    const handleConnectClick = () => {
      dispatch(IsConnectClicked());
    };

    if (!isConnectClicked && !isConnected) {
      intervalId = setInterval(() => {
        handleConnectClick();
      }, 2000);
    }

    return () => {
      if (intervalId !== undefined) {
        clearInterval(intervalId);
      }
    };
  }, [isConnectClicked, isConnected, dispatch]);

  return (
    <div className="relative">
      {window.innerWidth < 768 && (
        <button
          className="fixed top-4 right-6 z-50 bg-gray-800 rounded-full p-2 text-white"
          onClick={() => setSidebarVisible(!isSidebarVisible)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              d="M3 12h18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M3 6h18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M3 18h18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}

      <div
        className={`bg-second flex h-screen ${
          isMeetingClicked || (isConnectClicked && !isConnected)
            ? "blur-sm opacity-90"
            : ""
        }`}
      >
        {isSidebarVisible && (
          <div
            className={`w-1/5 bg-sidebar ${
              window.innerWidth >= 768
                ? "h-screen"
                : "absolute inset-0 w-56 z-10"
            }`}
          >
            <SideBar />
          </div>
        )}

        <div className="w-full bg-home overflow-y-auto h-screen">
          <Outlet />
        </div>
      </div>

      {isMeetingClicked && <CreateMeeting />}
      {isConnectClicked && !isConnected && <Connect />}
    </div>
  );
}

export default HomeLayout;
