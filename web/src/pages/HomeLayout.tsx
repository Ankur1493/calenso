import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import { useSelector } from "react-redux";
import { RootState } from "../store.ts";
import CreateMeeting from "../components/CreateMeeting.tsx";
import { IsConnectClicked } from "../slices/isClickedSlice.ts";
import Connect from "../components/Connect.tsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

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

  useEffect(() => {
    let intervalId = null;
    const handleConnectClick = () => {
      dispatch(IsConnectClicked());
    };

    if (!isConnectClicked && !isConnected) {
      intervalId = setInterval(() => {
        handleConnectClick();
      }, 2000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isConnectClicked, isConnected, dispatch]);

  return (
    <div className="relative">
      <div
        className={`bg-second flex h-screen ${
          isMeetingClicked || (isConnectClicked && !isConnected)
            ? "blur-sm opacity-90"
            : ""
        }`}
      >
        <SideBar />
        <div className="w-full bg-home ">
          <Outlet />
        </div>
      </div>
      {isMeetingClicked && <CreateMeeting />}
      {isConnectClicked && !isConnected && <Connect />}
    </div>
  );
}

export default HomeLayout;
