import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Form from "../components/Form";
import { useSelector } from "react-redux";
import { RootState } from "../store.ts";

function HomeLayout() {
  const isClicked = useSelector(
    (state: RootState) => state.isClicked.isClicked
  );

  return (
    <div className="relative">
      <div
        className={`bg-second flex h-screen ${
          isClicked ? "blur-sm opacity-90" : ""
        }`}
      >
        <SideBar />
        <div className="w-full bg-home">
          <Outlet />
        </div>
      </div>
      {isClicked && <Form />}
    </div>
  );
}

export default HomeLayout;
