import React from "react";

function BookMeetingCard() {
  return (
    <div>
      <div className="border border-gray-400 rounded-md bg-input bg-opacity-20">
        <div className="block w-full p-5">
          <a data-testid="event-type-link" href="/ankur-sharma/15min">
            <div className="flex flex-wrap items-center">
              <h2 className=" text-mainText font-heading pr-2 text-sm font-semibold">
                15 Min Meeting
              </h2>
            </div>
            <div className="text-subtle">
              <ul className="mt-2 flex flex-wrap gap-x-2 gap-y-1">
                <li>
                  <div className="font-medium font-heading text-mainText inline-flex items-center justify-center rounded gap-x-1 bg-subtle py-1 px-1.5 text-xs leading-3">
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
                      className="lucide lucide-clock h-3 w-3 stroke-[3px]"
                      data-testid="start-icon"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    15m
                  </div>
                </li>
              </ul>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BookMeetingCard;
