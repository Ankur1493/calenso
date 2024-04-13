import React from "react";
import meet from "../assets/icons/meet.png";
import Calendar from "react-calendar";

function ScheduleBooking() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex bg-second w-10/12 justify-center items-center p-16 border border-gray-400 rounded-md border-opacity-40">
        <div className="flex border border-gray-200 border-opacity-40 rounded-md">
          <div
            className="p-6 pr-20 bg-second border-r border-r-gray-200 border-opacity-40 "
            data-testid="event-meta"
          >
            <ul className="flex items-center">
              <li className="-mr-1 inline-block">
                <a
                  data-state="closed"
                  href="https://cal.com/ankur-sharma?redirect=false"
                >
                  <span
                    data-testid="avatar"
                    className="bg-emphasis item-center relative inline-flex aspect-square justify-center rounded-full align-top overflow-hidden border-subtle w-6 h-6 min-w-6 min-h-6"
                  >
                    <img
                      alt="Ankur Sharma"
                      className="aspect-square rounded-full w-6 h-6 min-w-6 min-h-6"
                      src="https://lh3.googleusercontent.com/a/ACg8ocL8zHgRMu9d_CrZt2fNCGZPWOcuALthFOyWL-oHCWmZmEA=s96-c"
                    />
                  </span>
                </a>
              </li>
            </ul>
            <p className="text-input text-opacity-50 mt-2 text-sm font-heading font-semibold">
              Ankur Sharma
            </p>
            <h1
              data-testid="event-title"
              className="text-mainText font-heading text-xl font-semibold my-6"
            >
              15 Min Meeting
            </h1>
            <div className="space-y-4 font-medium rtl:-mr-2">
              <div className="flex items-start justify-start text-sm text-text">
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
                  className="lucide lucide-clock relative z-20 mr-2 mt-[2px] h-4 w-4 flex-shrink-0 rtl:ml-2 text-mainText"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <div className="relative z-10 max-w-full break-words text-mainText font-heading">
                  15 mins
                </div>
              </div>
              <div className="flex items-start justify-start text-sm text-text">
                <div className="relative z-10 max-w-full break-words">
                  <div className="text-default mr-6 flex w-full flex-col space-y-4 break-words text-sm rtl:mr-2">
                    <div className="flex flex-row items-center text-sm font-medium">
                      <img
                        src={meet}
                        className="me-[10px] h-4 w-4"
                        alt="Cal Video icon"
                      />
                      <p
                        className="line-clamp-1 text-mainText font-heading"
                        data-state="closed"
                      >
                        Calenso Video
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Calendar />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleBooking;
