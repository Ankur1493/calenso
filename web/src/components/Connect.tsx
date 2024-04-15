import { useDispatch } from "react-redux";
import { IsConnectClicked, IsConnected } from "../slices/isClickedSlice";
import { Link } from "react-router-dom";
import calender from "../assets/images/landing.png";

function Connect() {
  const dispatch = useDispatch();

  const handleConnected = () => {
    dispatch(IsConnected());
  };

  const handleConnectClick = () => {
    dispatch(IsConnectClicked());
  };

  return (
    <div className="flex justify-center fixed inset-0 items-center z-20">
      <div className="bg-second px-8 pt-4 w-[500px] rounded-2xl border border-gray-400 ">
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
          <div className="w-full rounded-md h-80 mt-2 flex justify-top">
            <img src={calender} alt="" className="w-full h-full justify-top" />
          </div>
          <div className="flex justify-end space-x-2 pb-6 pt-4 items-end">
            <Link
              to="http://localhost:8000/auth/google"
              className="inline-flex items-end text-sm font-medium relative rounded-md transition h-9 px-4 py-2.5 bg-mainText text-main font-heading hover:bg-opacity-80"
              onClick={() => {
                handleConnected()
                handleConnectClick()
              }}
            >
              Connect
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connect;
