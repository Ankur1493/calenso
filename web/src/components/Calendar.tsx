import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { isSameMonth } from "date-fns";

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  const tileClassName = ({ date, view }) => {
    return view === "month" && isSameMonth(date, new Date());
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
          
          .react-calendar__navigation__label:hover{
            background: transparent !important;
          }

          .react-calendar__navigation__arrow:hover{
            background: input !important;
            opacity: 0.4;
            color: black;
            border-radius: 5px;
          }

          .react-calendar__tile {
            background: transparent;
            transition: opacity 0.2s ease;
            border: none;
            color: #fff
          }
          
          .react-calendar__tile--active {
            background: #1E1F20; 
          }
          
          .react-calendar__tile--hasActive {
            background: transparent; 
          }
          
          .react-calendar__tile:hover {
            border: none; 
            background: input !important;
            opacity:0.4;
            color: black;
            border-radius: 5px
          }
          
          .text-white {
            color: #FFFFFF; 
          }

          .react-calendar__month-view__weekdays__weekday {
            color: #ffffff;
            opacity: 0.7;
            padding-bottom: 20px;
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
