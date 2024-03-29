import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import { useSelector } from "react-redux";
import { RootState } from "../store.ts";
import CreateMeeting from "../components/CreateMeeting.tsx";
import MeetingDetails from "../components/MeetingDetails.tsx";

function HomeLayout() {
  const isMeetingClicked = useSelector(
    (state: RootState) => state.isClicked.isMeetingFormClicked
  );

  const isMeetingDetailsClicked = useSelector(
    (state: RootState) => state.isClicked.isDetailsClicked
  );

  return (
    <div className="relative">
      <div
        className={`bg-second flex h-screen ${
          isMeetingClicked ? "blur-sm opacity-90" : ""
        }`}
      >
        <SideBar />
        <div className="w-full bg-home ">
          <Outlet />
        </div>
      </div>
      {isMeetingClicked && <CreateMeeting />}
    </div>
  );
}

export default HomeLayout;
