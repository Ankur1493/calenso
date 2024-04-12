import React from "react";

function BookingCard({ booking }) {
  const formatDate = (ISOString) => {
    const date = new Date(ISOString);
    const options = { weekday: "short", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const formatTime = (ISOString) => {
    const date = new Date(ISOString);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="p-2 px-6">
      <div className="group bg-second flex w-full max-w-full items-center justify-between overflow-hidden px-4 py-5 sm:px-6 border border-gray-400 rounded-[8px]">
        <div className="flex flex-row">
          <div className="text-left">
            <p
              className="text-mainText font-heading "
              data-testid="event-type-title-705355"
            >
              {formatDate(booking.startTime)}
            </p>
            <p
              className="text-input text-[15px] opacity-80 font-heading"
              data-testid="event-type-title-705355"
            >
              {formatTime(booking.startTime)} - {formatTime(booking.endTime)}
            </p>
          </div>
          <div className="text-subtle ml-16">
            <ul className="flex flex-col flex-wrap gap-x-2">
              <li>
                <span className="text-mainText font-heading font-medium ">
                  {booking.title}
                </span>
              </li>
              <li>
                <span className="text-input font-heading text-[15px] ">
                  {booking.description}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 hidden sm:mt-0 sm:flex">
          <div className="flex justify-between space-x-2 rtl:space-x-reverse">
            <a
              className="inline-flex items-center text-sm font-medium relative rounded-md text-mainText border border-default h-9 px-4 py-2.5 whitespace-nowrap "
              data-testid="cancel"
              href="/booking/fQtvoM3QVe9Bj271P1EZ3w?cancel=true"
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
              Cancel event
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingCard;
