import { useState } from "react";
import BookingType from "./BookingType";

function Bookings() {
  const [filter, setFilter] = useState("upcoming");

  return (
    <div>
      <div className="max-w-full px-2 pt-12 md:pt-8 lg:px-6">
        <div className="flex items-center">
          <header className="flex w-full max-w-full items-center">
            <div className="w-full ">
              <h3 className="font-heading max-w-28 sm:max-w-72 md:max-w-80 text-mainText truncate font-semibold tracking-wide sm:text-xl xl:max-w-full text-xl">
                Bookings
              </h3>
              <p
                className="font-heading text-mainText text-sm"
                data-testid="subtitle"
              >
                See upcoming and past events booked through your event type
                links.
              </p>
            </div>
          </header>
        </div>
        <div className="mt-8">
          <div className="flex flex-col">
            <div className="flex flex-row flex-wrap justify-between">
              <div className="mb-4 h-9 max-w-full lg:mb-5">
                <nav className="flex max-h-9 space-x-4 lg:space-x-12 rounded-md">
                  <button
                    className={`bg-emphasis text-input font-heading inline-flex items-center justify-center md:mb-0 px-4 mx-4  py-2.5 text-md ${filter === "upcoming"
                      ? "font-semibold text-mainText text-[18px] decoration-2"
                      : ""
                      }`}
                    onClick={() => setFilter("upcoming")}
                  >
                    Upcoming
                  </button>
                  <button
                    className={`bg-emphasis text-input font-heading inline-flex items-center justify-center md:mb-0 px-4 mx-4  py-2.5 text-md ${filter === "past"
                      ? "font-semibold text-mainText text-[18px] decoration-2"
                      : ""
                      }`}
                    onClick={() => setFilter("past")}
                  >
                    Past
                  </button>
                  <button
                    className={`bg-emphasis text-input font-heading inline-flex items-center justify-center md:mb-0 px-4 mx-4  py-2.5 text-md ${filter === "cancelled"
                      ? "font-semibold text-mainText text-[18px] decoration-2"
                      : ""
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
      </div>{
        //@ts-ignore
        <BookingType filter={filter} />
      }    </div>
  );
}

export default Bookings;
