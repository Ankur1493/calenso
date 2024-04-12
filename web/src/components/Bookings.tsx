// Bookings.js
import React, { useState } from "react";
import BookMeetingCard from "./BookMeetingCard";

function Bookings() {
  const [filter, setFilter] = useState("upcoming");

  return (
    <div>
      <div className="max-w-full px-2 pt-8 lg:px-6">
        <div className="flex items-center">
          <header className="flex w-full max-w-full items-center truncate">
            <div className="w-full truncate ltr:mr-4 rtl:ml-4 md:block">
              <h3 className="font-heading max-w-28 sm:max-w-72 md:max-w-80 text-mainText truncate font-semibold tracking-wide sm:text-xl md:block xl:max-w-full text-xl hidden">
                Bookings
              </h3>
              <p
                className="font-heading text-mainText hidden text-sm md:block"
                data-testid="subtitle"
              >
                See upcoming and past events booked through your event type
                links.
              </p>
            </div>
          </header>
        </div>
        <div className="mt-16">
          <div className="flex flex-col">
            <div className="flex flex-row flex-wrap justify-between">
              <div className="mb-4 h-9 max-w-full lg:mb-5">
                <nav className="flex max-h-9 space-x-12 rounded-md">
                  <button
                    className={`bg-emphasis text-emphasis inline-flex items-center justify-center md:mb-0 px-4 py-2.5 text-sm ${
                      filter === "upcoming" ? "font-bold" : ""
                    }`}
                    onClick={() => setFilter("upcoming")}
                  >
                    Upcoming
                  </button>
                  <button
                    className={`bg-emphasis text-emphasis inline-flex items-center justify-center md:mb-0 px-4 py-2.5 text-sm ${
                      filter === "past" ? "font-bold" : ""
                    }`}
                    onClick={() => setFilter("past")}
                  >
                    Past
                  </button>
                  <button
                    className={`bg-emphasis text-emphasis inline-flex items-center justify-center md:mb-0 px-4 py-2.5 text-sm ${
                      filter === "cancelled" ? "font-bold" : ""
                    }`}
                    onClick={() => setFilter("cancelled")}
                  >
                    Cancelled
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BookMeetingCard filter={filter} />
    </div>
  );
}

export default Bookings;
