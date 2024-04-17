import { useEffect, useState } from "react";
import { useMeetingDetailsQuery } from "../slices/meetingsApiSlice";
import { useParams, Link } from "react-router-dom";
import Delete from "../Hooks/Delete";
import { days } from "../constants/constants";
import useCopyToClipboard from "../Hooks/Copy";
import { useSelector } from "react-redux";
import { RootState } from "../store";

function MeetingDetails() {
  const { userInfo } = useSelector((state: RootState) => state.auth);

  const [showCopyTooltip, setShowCopyTooltip] = useState(false);
  const [showDeleteTooltip, setShowDeleteTooltip] = useState(false);
  const [showPreviewTooltip, setShowPreviewTooltip] = useState(false);

  const { id } = useParams();
  const { handleDeleteMeeting } = Delete({ id: id ?? "" });
  const {
    data: meetingDetails,
    isLoading,
    isError,
    error,
  } = useMeetingDetailsQuery(id);

  const meetingLink = `http://localhost:5173/${userInfo.username}/${id}`;
  const { isCopied, copyToClipboard } = useCopyToClipboard({
    textToCopy: meetingLink,
  });

  useEffect(() => {}, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {(error as any).message}</div>;
  }

  if (!meetingDetails) {
    return null;
  }

  return (
    <div className="bg-home h-full px-6 py-3 ">
      <header className="group bg-transparent flex w-full max-w-full items-center justify-between overflow-hidden py-2 pt-12 md:pt-6 ">
        <div className="w-full truncate ltr:mr-4 rtl:ml-4 md:block">
          <h3 className="font-heading max-w-28 sm:max-w-72 md:max-w-80 text-mainText inline truncate font-semibold tracking-wide sm:text-xl md:block xl:max-w-full text-xl">
            {meetingDetails.meeting.title}
          </h3>
        </div>

        <div className="mt-4 sm:mt-0 sm:flex">
          <div className="flex justify-between space-x-2 rtl:space-x-reverse">
            <Link
              to={`/${userInfo.username}/${id}`}
              target="_blank"
              onMouseEnter={() => setShowPreviewTooltip(true)}
              onMouseLeave={() => setShowPreviewTooltip(false)}
              className="whitespace-nowrap items-center text-sm font-medium relative rounded-md transition flex justify-center text-mainText border border-default h-9 px-4 py-2.5 min-h-[36px] min-w-[36px] !p-2 hover:border-default hover:bg-home"
            >
              {showPreviewTooltip && (
                <span className="tooltip absolute bottom-full left-1/2 transform -translate-x-1/2 text-white text-[12px] px-2 py-1 ">
                  Preview
                </span>
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-external-link h-5 w-5"
              >
                <path d="M15 3h6v6"></path>
                <path d="M10 14 21 3"></path>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              </svg>
            </Link>
            <button
              data-state="closed"
              type="button"
              onClick={() => {
                copyToClipboard();
              }}
              className="whitespace-nowrap items-center text-sm font-medium relative rounded-md transition flex justify-center text-mainText border border-default h-9 px-4 py-2.5 min-h-[36px] min-w-[36px] !p-2 hover:border-default"
              onMouseEnter={() => setShowCopyTooltip(true)}
              onMouseLeave={() => setShowCopyTooltip(false)}
            >
              {showCopyTooltip && (
                <span className="tooltip absolute bottom-full left-1/2 transform -translate-x-1/2 text-white text-[12px] px-2 py-1 ">
                  {isCopied ? "Copied!" : "Copy"}
                </span>
              )}
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
                className="h-4 w-4"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
            </button>

            <button
              className="whitespace-nowrap items-center text-sm font-medium relative rounded-md transition flex justify-center text-mainText border border-default h-9 px-4 py-2.5 min-h-[36px] min-w-[36px] !p-2 hover:border-default hover:bg-red-400"
              onMouseEnter={() => setShowDeleteTooltip(true)}
              onMouseLeave={() => setShowDeleteTooltip(false)}
              onClick={handleDeleteMeeting}
            >
              {showDeleteTooltip && (
                <span className="tooltip absolute bottom-full left-1/2 transform -translate-x-1/2 text-white text-[12px] px-2 py-1 ">
                  Delete
                </span>
              )}
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
                className="h-4 w-4"
              >
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="w-full truncate ltr:mr-4 rtl:ml-4 md:block">
        <h3 className="font-heading max-w-28 sm:max-w-72 md:max-w-80 text-mainText inline truncate font-semibold tracking-wide sm:text-xl md:block xl:max-w-full text-xl">
          {meetingDetails.title}
        </h3>
      </div>

      <div className="border-subtle space-y-6 rounded-lg border p-6 mt-6">
        <div className="">
          <label
            className="text-mainText font-heading mb-2 block text-sm font-medium leading-none"
            htmlFor="title"
          >
            Title
          </label>
          <input
            id="title"
            placeholder=""
            className="hover:border-emphasis dark:focus:border-emphasis border-default bg-transparent placeholder:text-muted text-mainText font-heading focus:ring-brand-default focus:border-subtle mb-2 block h-9 rounded-md border px-3 py-2 text-sm leading-4 transition focus:outline-none focus:ring-2 w-full disabled:bg-subtle disabled:hover:border-subtle disabled:cursor-not-allowed opacity-60"
            name="title"
            value={meetingDetails.meeting.title}
            readOnly
          />
        </div>

        <div className="">
          <label
            className="text-mainText font-heading mb-2 block text-sm font-medium leading-none"
            htmlFor="duration"
          >
            Duration
          </label>
          <div
            dir="ltr"
            className="focus-within:ring-brand-default group relative mb-1 flex items-center rounded-md focus-within:outline-none focus-within:ring-2"
          >
            <input
              data-testid="duration"
              id=":r2g:"
              type="number"
              placeholder=""
              className="hover:border-emphasis dark:focus:border-emphasis border-default bg-transparent text-mainText font-heading placeholder:text-muted text-emphasis focus:ring-brand-default focus:border-subtle mb-2 block h-9 rounded-md border px-3 py-2 text-sm leading-4 transition focus:outline-none focus:ring-2 w-full disabled:bg-subtle disabled:hover:border-subtle disabled:cursor-not-allowed rounded-r-none border-r-0 !my-0 !ring-0 opacity-60"
              name="length"
              min="1"
              value={meetingDetails.meeting.duration}
            />
            <div className="addon-wrapper border-default [input:hover_+_&amp;]:border-emphasis [input:hover_+_&amp;]:border-l-default [&amp;:has(+_input:hover)]:border-emphasis [&amp;:has(+_input:hover)]:border-r-default h-9 border px-3 bg-input bg-opacity-40 ltr:rounded-r-md rtl:rounded-l-md">
              <div className="min-h-9 flex flex-col justify-center text-sm leading-7 text-default">
                <span className="flex whitespace-nowrap text-mainText font-heading">
                  Minutes
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <label
            className="text-mainText font-heading mb-2 block text-sm font-medium leading-none"
            htmlFor="info"
          >
            Information
          </label>
          <input
            id="info"
            placeholder=""
            className="hover:border-emphasis dark:focus:border-emphasis border-default bg-transparent placeholder:text-muted text-mainText font-heading focus:ring-brand-default focus:border-subtle mb-2 block h-9 rounded-md border px-3 py-2 text-sm leading-4 transition focus:outline-none focus:ring-2 w-full disabled:bg-subtle disabled:hover:border-subtle disabled:cursor-not-allowed opacity-60"
            name="info"
            value={meetingDetails.meeting.info}
            readOnly
          />
        </div>

        <div className="">
          <label
            className="text-mainText font-heading mb-2 block text-sm font-medium leading-none"
            htmlFor="info"
          >
            Availability
          </label>
          <div className="border-subtle space-y-4 border rounded-2xl p-3">
            <ol className="table border-collapse text-sm">
              {days.map((day) => {
                const schedule =
                  meetingDetails.meeting.availability.availableSchedule.find(
                    (item: any) => item.DAY === day
                  );

                return (
                  <li
                    key={day}
                    className="my-4 flex border-transparent last:mb-2"
                  >
                    <span className="w-20 font-medium sm:w-32 text-mainText font-heading">
                      {day}
                    </span>
                    <div className="space-y-3 text-right pl-8 md:pl-20">
                      {schedule && schedule.START_TIME && schedule.END_TIME ? (
                        <div className="text-mainText font-heading flex items-center leading-4">
                          <span className="w-16 sm:w-28 sm:text-left">
                            {schedule.START_TIME}
                          </span>
                          <span className="ms-4 text-mainText font-heading">
                            -
                          </span>
                          <div className="ml-6 sm:w-28">
                            {schedule.END_TIME}
                          </div>
                        </div>
                      ) : (
                        <div className="text-subtle flex items-center leading-4">
                          <span className="ml-6 sm:ml-0 text-mainText font-heading text-opacity-50">
                            Unavailable
                          </span>
                        </div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetingDetails;
