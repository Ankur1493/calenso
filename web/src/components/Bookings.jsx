import React from "react";

function Bookings() {
  return (
    <div>
      <div className="max-w-full px-2 py-4 lg:px-6">
        <div className="flex items-center md:mb-6 md:mt-0 lg:mb-8 mb-0">
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
                  <a
                    className="bg-emphasis text-emphasis inline-flex items-center justify-center md:mb-0 px-4 py-2.5 text-sm "
                    href="/"
                  >
                    <div className="flex items-center gap-x-2 font-heading text-mainText">
                      {" "}
                      Upcoming
                    </div>
                  </a>
                  <a
                    className="bg-emphasis text-emphasis inline-flex items-center justify-center md:mb-0 px-4 py-2.5 text-sm "
                    href="/"
                  >
                    <div className="flex items-center gap-x-2 font-heading text-mainText">
                      {" "}
                      Unconfirmed
                    </div>
                  </a>
                  <a
                    className="bg-emphasis text-emphasis inline-flex items-center justify-center md:mb-0 px-4 py-2.5 text-sm "
                    href="/"
                  >
                    <div className="flex items-center gap-x-2 font-heading text-mainText">
                      {" "}
                      Recurring
                    </div>
                  </a>
                  <a
                    className="bg-emphasis text-emphasis inline-flex items-center justify-center md:mb-0 px-4 py-2.5 text-sm "
                    href="/"
                  >
                    <div className="flex items-center gap-x-2 font-heading text-mainText">
                      {" "}
                      Past
                    </div>
                  </a>
                  <a
                    className="bg-emphasis text-emphasis inline-flex items-center justify-center md:mb-0 px-4 py-2.5 text-sm "
                    href="/"
                  >
                    <div className="flex items-center gap-x-2 font-heading text-mainText">
                      {" "}
                      Cancelled
                    </div>
                  </a>
                </nav>
              </div>
            </div>
            <div className="relative;"></div>
            <main className="w-full">
              <div className="flex w-full flex-col relative;">
                <div className="flex items-center justify-center pt-2 xl:pt-0">
                  <div
                    data-testid="empty-screen"
                    className="flex w-full select-none flex-col items-center justify-center rounded-lg p-7 lg:p-20 border-subtle border border-dashed"
                  >
                    <div className="bg-emphasis flex h-[72px] w-[72px] items-center justify-center rounded-full text-mainText">
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
                        className="text-default inline-block h-10 w-10 stroke-[1.3px]"
                      >
                        <rect
                          width="18"
                          height="18"
                          x="3"
                          y="4"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="16" x2="16" y1="2" y2="6"></line>
                        <line x1="8" x2="8" y1="2" y2="6"></line>
                        <line x1="3" x2="21" y1="10" y2="10"></line>
                      </svg>
                    </div>
                    <div className="flex max-w-[420px] flex-col items-center">
                      <h2 className="font-heading text-mainText text-center text-xl mt-6">
                        No upcoming bookings
                      </h2>
                      <div className="font-heading text-mainText mb-8 mt-8 text-center text-sm font-normal leading-6">
                        You have no upcoming bookings. As soon as someone books
                        a time with you it will show up here.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <nav className="pwa:pb-[max(0.625rem,env(safe-area-inset-bottom))] pwa:-mx-2 bg-muted border-subtle fixed bottom-0 left-0 z-30 flex w-full border-t bg-opacity-40 px-1 shadow backdrop-blur-md md:hidden">
          <a
            className="[&amp;[aria-current='page']]:text-emphasis hover:text-default text-muted relative my-2 min-w-0 flex-1 overflow-hidden rounded-md !bg-transparent p-1 text-center text-xs font-medium focus:z-10 sm:text-sm"
            href="/event-types"
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
              className="[&amp;[aria-current='page']]:text-emphasis  mx-auto mb-1 block h-5 w-5 flex-shrink-0 text-center text-inherit"
              aria-hidden="true"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
            <span className="block truncate">Event Types</span>
          </a>
          <a
            className="[&amp;[aria-current='page']]:text-emphasis hover:text-default text-muted relative my-2 min-w-0 flex-1 overflow-hidden rounded-md !bg-transparent p-1 text-center text-xs font-medium focus:z-10 sm:text-sm"
            aria-current="page"
            href="/bookings/upcoming"
          >
            <div className="absolute right-1 top-1"></div>
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
              className="[&amp;[aria-current='page']]:text-emphasis  mx-auto mb-1 block h-5 w-5 flex-shrink-0 text-center text-inherit"
              aria-hidden="true"
              aria-current="page"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
              <line x1="16" x2="16" y1="2" y2="6"></line>
              <line x1="8" x2="8" y1="2" y2="6"></line>
              <line x1="3" x2="21" y1="10" y2="10"></line>
            </svg>
            <span className="block truncate">Bookings</span>
          </a>
          <a
            className="[&amp;[aria-current='page']]:text-emphasis hover:text-default text-muted relative my-2 min-w-0 flex-1 overflow-hidden rounded-md !bg-transparent p-1 text-center text-xs font-medium focus:z-10 sm:text-sm"
            href="/availability"
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
              className="[&amp;[aria-current='page']]:text-emphasis  mx-auto mb-1 block h-5 w-5 flex-shrink-0 text-center text-inherit"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span className="block truncate">Availability</span>
          </a>
          <a
            className="[&amp;[aria-current='page']]:text-emphasis hover:text-default text-muted relative my-2 min-w-0 flex-1 overflow-hidden rounded-md !bg-transparent p-1 text-center text-xs font-medium focus:z-10 sm:text-sm"
            href="/apps"
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
              className="[&amp;[aria-current='page']]:text-emphasis  mx-auto mb-1 block h-5 w-5 flex-shrink-0 text-center text-inherit"
              aria-hidden="true"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
              <line x1="3" x2="21" y1="9" y2="9"></line>
              <line x1="3" x2="21" y1="15" y2="15"></line>
              <line x1="9" x2="9" y1="3" y2="21"></line>
              <line x1="15" x2="15" y1="3" y2="21"></line>
            </svg>
            <span className="block truncate">Apps</span>
          </a>
          <a
            className="[&amp;[aria-current='page']]:text-emphasis hover:text-default text-muted relative my-2 min-w-0 flex-1 overflow-hidden rounded-md !bg-transparent p-1 text-center text-xs font-medium focus:z-10 sm:text-sm"
            href="/more"
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
              className="[&amp;[aria-current='page']]:text-emphasis  mx-auto mb-1 block h-5 w-5 flex-shrink-0 text-center text-inherit"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
            <span className="block truncate">More</span>
          </a>
        </nav>
        <div className="block pt-12 md:hidden"></div>
      </div>
    </div>
  );
}

export default Bookings;
