import { useDispatch, useSelector } from "react-redux";
import { IsConnected, IsMeetingFormClicked } from "../slices/isClickedSlice";
import { useMeetingsQuery } from "../slices/meetingsApiSlice";
import MeetingCard from "./MeetingCard";
import { setMeetingIds } from "../slices/meetingSlice";
import { useEffect } from "react";
import { Meeting } from "../interfaces/interfaces";
import { RootState } from "../store";
import LoadingComponent from "./Loader";

function EventTypes() {
  const dispatch = useDispatch();
  //@ts-ignore
  const {
    data: meetings = [],
    isError,
    isLoading,
    refetch,
  } = useMeetingsQuery(undefined);

  const selectedMeetings = useSelector(
    (state: RootState) => state?.meetings?.meetings
  );

  const handleMeetingClick = () => {
    dispatch(IsMeetingFormClicked());
  };

  useEffect(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    const meetingArr = meetings?.userMeetings?.map((meet: Meeting) => meet);
    dispatch(setMeetingIds(meetingArr));
  }, [meetings, dispatch]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const profilePicture = params.get("profilePicture");
    const firstName = params.get("firstName");
    if (profilePicture) {
      const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
      userInfo.profilePicture = profilePicture;
      if (firstName) {
        userInfo.firstName = firstName;
      }
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      localStorage.setItem("isConnected", "true");
      dispatch(IsConnected());
    }
  }, []);

  if (isLoading) {
    return (
      <div className="w-screen  h-screen">
        {" "}
        <LoadingComponent />{" "}
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center px-6 py-12 md:py-8 ">
        <header className="flex w-full max-w-full items-center truncate">
          <div className="w-full truncate ltr:mr-4 rtl:ml-4 md:block">
            <h3 className="font-heading max-w-28 sm:max-w-72 md:max-w-80 text-emphasis font-semibold  sm:text-xl xl:max-w-full text-xl text-mainText">
              Event Types
            </h3>
            <p
              className="font-heading text-sm text-mainText"
              data-testid="subtitle"
            >
              Create events to share for people to book on your calendar.
            </p>
          </div>
          <div className="hidden items-center md:flex"></div>
          <div className="pwa:bottom-[max(7rem,_calc(5rem_+_env(safe-area-inset-bottom)))] fixed bottom-20 z-80 ltr:right-4 rtl:left-4 md:z-auto md:ltr:right-0 md:rtl:left-0 flex-shrink-0 [-webkit-app-region:no-drag] md:relative md:bottom-auto md:right-auto">
            <button
              data-testid="new-event-type"
              type="button"
              className="whitespace-nowrap inline-flex items-center text-sm font-medium relative transition disabled:cursor-not-allowed rounded-full justify-center md:rounded-md px-4 py-2.5 h-14 md:h-9 md:w-auto md:px-4 md:py-2.5 text-main bg-mainText font-heading font-semibold hover:opacity-80"
              onClick={handleMeetingClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="hidden h-4 w-4 stroke-[2px] ltr:-ml-1 ltr:mr-2 rtl:-mr-1 rtl:ml-2 md:inline-flex"
              >
                <line x1="12" x2="12" y1="5" y2="19"></line>
                <line x1="5" x2="19" y1="12" y2="12"></line>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="inline h-6 w-6 md:hidden"
                data-testid="plus"
              >
                <line x1="12" x2="12" y1="5" y2="19"></line>
                <line x1="5" x2="19" y1="12" y2="12"></line>
              </svg>
              <span className="hidden md:inline">New</span>
            </button>
          </div>
        </header>
      </div>
      {isError ? (
        <p className="text-white text-2xl">Error fetching meetings</p>
      ) : (
        <div>
          {selectedMeetings && selectedMeetings.length > 0 ? (
            selectedMeetings.map((meeting: Meeting) => (
              <div key={meeting._id}>
                <MeetingCard meeting={meeting} />
              </div>
            ))
          ) : (
            <div className="flex justify-center mt-16 px-4">
              <div className="flex w-full flex-col items-center justify-center rounded-lg p-7 lg:p-20 border border-dashed text-mainText">
                <div className="bg-emphasis flex h-[72px] w-[72px] items-center justify-center rounded-full ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-default inline-block h-10 w-10 stroke-[1.3px]"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                </div>
                <div className="flex max-w-[420px] flex-col items-center">
                  <h2 className="font-heading text-emphasis text-center text-xl mt-6">
                    Create your first event type
                  </h2>
                  <div className="font-heading text-mainText mb-8 mt-3 text-center text-sm font-normal leading-6 opacity-80">
                    Event types enable you to share links that show available
                    times on your calendar and allow people to make bookings
                    with you.
                  </div>
                  <button
                    className="whitespace-nowrap inline-flex items-center text-sm font-medium relative rounded-md transition bg-mainText h-9 px-4 py-2.5 text-main font-heading font-semibold hover:opacity-80"
                    onClick={handleMeetingClick}
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default EventTypes;
