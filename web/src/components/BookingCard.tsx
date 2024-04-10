import React from "react";

function BookingCard() {
  return (
    <div className="p-2 px-6">
      <div className="group bg-second flex w-full max-w-full items-center justify-between overflow-hidden px-4 py-5 sm:px-6 border border-gray-400 rounded-[8px]">
        <div className="flex flex-row">
          <div className="text-left">
            <p
              className="text-mainText font-heading "
              data-testid="event-type-title-705355"
            >
              Fri, 12 Apr
            </p>
            <p
              className="text-input text-[15px] opacity-80 font-heading"
              data-testid="event-type-title-705355"
            >
              09:00 - 09:45
            </p>
          </div>
          <div className="text-subtle ml-16">
            <ul className="mt-2 flex flex-wrap gap-x-2 gap-y-1">
              <li>
                <span className="text-mainText font-heading font-medium ">
                  abchkjejkn between Udit Kapoor and Ankur Sharma
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
