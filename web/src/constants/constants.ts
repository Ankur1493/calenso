export const AUTH_URL = "/user";
export const MEETINGS_URL = "/meetings";
export const BOOKINGS_URL = "/bookings";

export const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const timeOptions = [
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
  "00:00"
];

const userInfo = localStorage.getItem("userInfo");

export const sideLinks = [
  {
    eventTypes: {
      name: "Event Types",
      link: "/home/event-types",
      target: "",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: white;  height: 1rem; width: 1rem;" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`,
    },
  },
  {
    bookings: {
      name: "Bookings",
      link: "/home/bookings",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="4 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="todesktop:!text-blue-500 h-4 w-4 flex-shrink-0 [&amp;[aria-current='page']]:text-inherit text-mainText" aria-hidden="true"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>`,
    },
  },
  {
    bookingPage: {
      name: "Public page",
      link: "/mistake",
      target: "_blank",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link h-5 w-5"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>`,
    },
  },
  {
    landingPage: {
      name: "Landing page",
      link: userInfo ? "/" : "/defaultPath",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grid3x3 todesktop:!text-blue-500 h-5 w-5 flex-shrink-0 rtl:ml-2 md:ltr:mx-auto [&amp;[aria-current='page']]:text-inherit" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>`,
    },
  },
];
