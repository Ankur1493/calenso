import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

function MeetingCard({ meeting }) {
  const { userInfo } = useSelector((state: RootState) => state.auth);

  const [showCopyTooltip, setShowCopyTooltip] = useState(false);
  const [showEditTooltip, setShowEditTooltip] = useState(false);
  const [showDeleteTooltip, setShowDeleteTooltip] = useState(false);

  return (
    <div className="p-2 px-6">
      <div className="group bg-second flex w-full max-w-full items-center justify-between overflow-hidden px-4 py-4 sm:px-6 border border-gray-400 rounded-[8px]">
        <button className="bg-second absolute left-0  -ml-4 mt-8 hidden h-6 w-6  scale-0 items-center justify-center rounded-md border p-1 transition-all ">
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
            className="h-5 w-5"
          ></svg>
        </button>
        <a
          className="flex-1 overflow-hidden pr-4 text-sm"
          title="Meeting"
          href="/"
        >
          <div>
            <span
              className="text-mainText font-heading font-semibold"
              data-testid="event-type-title-705355"
            >
              {meeting.duration} Min Meeting
            </span>
            <small className="text-mainText font-heading">
              /{userInfo.username}/{meeting.duration}min
            </small>
          </div>
          <div className="text-subtle">
            <ul className="mt-2 flex flex-wrap gap-x-2 gap-y-1">
              <li>
                <div className="font-medium inline-flex items-center justify-center rounded gap-x-1 text-mainText py-1 px-1.5 text-xs leading-3">
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
                    className="h-3 w-3 stroke-[3px]"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  {meeting.duration}m
                </div>
              </li>
            </ul>
          </div>
        </a>
        <div className="mt-4 hidden sm:mt-0 sm:flex">
          <div className="flex justify-between space-x-2 rtl:space-x-reverse">
            <button
              data-state="closed"
              type="button"
              className="whitespace-nowrap items-center text-sm font-medium relative rounded-md transition flex justify-center text-mainText border border-default h-9 px-4 py-2.5 min-h-[36px] min-w-[36px] !p-2 hover:border-default"
              onMouseEnter={() => setShowCopyTooltip(true)}
              onMouseLeave={() => setShowCopyTooltip(false)}
            >
              {showCopyTooltip && (
                <span className="tooltip absolute bottom-full left-1/2 transform -translate-x-1/2 text-white text-[12px] px-2 py-1 ">
                  Copy
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
              type="button"
              data-testid="event-type-edit-705355"
              className="whitespace-nowrap items-center text-sm font-medium relative rounded-md transition flex justify-center text-mainText border border-default h-9 px-4 py-2.5 min-h-[36px] min-w-[36px] !p-2 hover:border-default "
              onMouseEnter={() => setShowEditTooltip(true)}
              onMouseLeave={() => setShowEditTooltip(false)}
            >
              {showEditTooltip && (
                <span className="tooltip absolute bottom-full left-1/2 transform -translate-x-1/2 text-white text-[12px] px-2 py-1 ">
                  Edit
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
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
              </svg>
            </button>
            <button
              className="whitespace-nowrap items-center text-sm font-medium relative rounded-md transition flex justify-center text-mainText border border-default h-9 px-4 py-2.5 min-h-[36px] min-w-[36px] !p-2 hover:border-default"
              onMouseEnter={() => setShowDeleteTooltip(true)}
              onMouseLeave={() => setShowDeleteTooltip(false)}
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
      </div>
    </div>
  );
}

export default MeetingCard;
