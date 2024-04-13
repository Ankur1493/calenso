import React, { useState } from "react";
import "react-calendar/dist/Calendar.css"; // Import Calendar CSS
import Calendar from "react-calendar";

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <style>
        {`
          .react-calendar {
            max-width: 100%;
            background: #1E1F20;
            border: none;
          }
          
          .react-calendar__navigation {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: none;
          }
          
          .react-calendar__navigation__label,
          .react-calendar__navigation__arrow {
            color: #FFFFFF;
            font-size: 1rem;
            font-family: 'Poppins', sans-serif;
          }
          
          .react-calendar__tile {
            background: transparent;
            color: #000000; /* Color of available dates */
            transition: opacity 0.2s ease;
            border: none; /* Remove border from tiles */
          }
          
          .react-calendar__tile--active {
            background: #1E1F20; /* Second color for active dates */
          }
          
          .react-calendar__tile--hasActive {
            background: transparent; 
          }
          
          .react-calendar__tile:hover {
            border: none; /* No border on hover */
          }
          
          .react-calendar__month-view__days__day {
            color: #FFFFFF; /* Color of the days */
          }
        `}
      </style>
      <Calendar
        onChange={onChange}
        value={date}
        className="rounded-lg p-4 bg-second"
      />
    </div>
  );
};

export default CalendarComponent;
