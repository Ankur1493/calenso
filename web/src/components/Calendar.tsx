import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { isSameMonth } from "date-fns";

const CalendarComponent = ({ onDateChange }) => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
    onDateChange(newDate);
  };

  const tileClassName = ({ date, view }) => {
    return view === "month" && isSameMonth(date, new Date());
  };

  return (
    <div className="flex justify-center items-center">
      <style>
        {`
          .react-calendar {
            max-width: 100%;
            background: transparent !important;
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
          
           .react-calendar__navigation__label:hover
           { background: transparent !important;
          }

          .react-calendar__navigation__arrow:hover {
            background: #D9D9D9;
            background-opacity-0.6;
            color: #000000;
          }

          .react-calendar__tile {
            background: transparent;
            transition: opacity 0.2s ease;
            border: none;
            color: #fff
          }
          
          .react-calendar__tile--active {
            background: #D9D9D9 !important;
            color: #000000;
            border-radius: 5px;
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
            color: #D9D9D9;
            opacity: 0.7;
            padding-bottom: 20px;
          }
        `}
      </style>
      <Calendar
        onChange={onChange}
        value={date}
        className="rounded-lg p-4 bg-second"
        tileClassName={tileClassName}
      />
    </div>
  );
};

export default CalendarComponent;
