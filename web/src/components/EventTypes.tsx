import { useDispatch } from "react-redux";
import { IsMeetingFormClicked } from "../slices/isClickedSlice";
import { useMeetingsQuery } from "../slices/meetingsApiSlice";
import MeetingCard from "./MeetingCard";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function EventTypes() {
  const dispatch = useDispatch();
  const { data: meetings = [], isError, isLoading } = useMeetingsQuery();
  console.log(meetings);
  const handleMeetingClick = () => {
    dispatch(IsMeetingFormClicked());
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <div className="flex items-center md:mb-6 md:mt-0 lg:mb-8 mb-0 px-6 py-4">
        <header className="flex w-full max-w-full items-center truncate">
          <div className="w-full truncate ltr:mr-4 rtl:ml-4 md:block">
            <h3 className="font-heading max-w-28 sm:max-w-72 md:max-w-80 text-emphasis truncate font-semibold tracking-wide sm:text-xl md:block xl:max-w-full text-xl hidden text-mainText">
              Event Types
            </h3>
            <p
              className="font-heading hidden text-sm md:block text-mainText"
              data-testid="subtitle"
            >
              Create events to share for people to book on your calendar.
            </p>
          </div>
          <div className="hidden items-center md:flex"></div>
          <div className="pwa:bottom-[max(7rem,_calc(5rem_+_env(safe-area-inset-bottom)))] fixed bottom-20 z-40 ltr:right-4 rtl:left-4 md:z-auto md:ltr:right-0 md:rtl:left-0 flex-shrink-0 [-webkit-app-region:no-drag] md:relative md:bottom-auto md:right-auto">
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
        <p>Error fetching meetings</p>
      ) : (
        <div>
          {meetings.userMeetings.length > 0 ? (
            meetings.userMeetings.map((meeting) => (
              <div key={meeting.id}>
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
