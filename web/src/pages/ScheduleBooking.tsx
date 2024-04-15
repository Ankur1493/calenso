import meet from "../assets/icons/meet.png";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { isSameMonth, isSameDay } from "date-fns"; // Import isSameDay
import { meetingTime } from "../constants/constants";
import TimeCard from "../components/TimeCard";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useGetUserDetailsQuery } from "../slices/usersApiSlice";
import { useCreateBookingMutation } from "../slices/bookingApiSlice";
import { useParams, useNavigate } from "react-router-dom";
import LoadingComponent from "../components/Loader";

function ScheduleBooking() {
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState();
  const [additionalNotes, setAdditonalNotes] = useState("");
  const [selectedDetails, setSelectedDetails] = useState(false);
  const [availableDates, setAvailableDates] = useState([]); // State to store available dates

  const navigate = useNavigate();
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const handleTimeSelect = (time: string | null) => {
    setSelectedTime(time);
  };

  const { username, id: meetingId } = useParams();

  const {
    data: User,
    isError: queryError,
    isLoading: queryLoading,
  } = useGetUserDetailsQuery({ username, meetingId });
  const [createBooking, { isError, isLoading }] = useCreateBookingMutation();

  useEffect(() => {
    if (selectedDate && selectedTime) {
      setSelectedDetails(true);
    } else {
      setSelectedDetails(false);
    }
  }, [selectedTime, selectedDate]);

  const tileClassName = ({ date }) => {
    const isAvailableDate = User.meeting.availability.availableSchedule.some(
      (schedule) => {
        const { DAY, START_TIME } = schedule;
        const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });
        const startTime = new Date(`1970-01-01T${START_TIME}`);
        return dayOfWeek === DAY && date.getTime() >= startTime.getTime();
      }
    );

    return isAvailableDate ? "clickable-date" : "not-clickable-date";
  };

  const handleSubmit = async () => {
    const [hours, minutes] = selectedTime?.split(":").map(Number);
    const combinedDateTime = selectedDate;
    combinedDateTime.setHours(hours, minutes, 0, 0);
    const START_TIME = `${combinedDateTime.getFullYear()}-${String(
      combinedDateTime.getMonth() + 1
    ).padStart(2, "0")}-${String(combinedDateTime.getDate()).padStart(
      2,
      "0"
    )}T${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:00`;
    try {
      const response = await createBooking({ START_TIME, meetingId }).unwrap();
      setSelectedTime(null);
      setSelectedDate(new Date());
      setAdditonalNotes("");
      navigate(`/bookings/${response?.bookingId}`);
      toast.success(response.message);
    } catch (err) {
      toast.error(err?.data?.message || err?.error);
    }
  };

  if (isLoading || queryLoading) {
    return <div className="h-screen w-screen"> <LoadingComponent /> </div>;
  }

  if (isError || queryError) {
    return <div className="text-2xl text-white h-screen">Error</div>;
  }

  return (
    <div className="flex justify-center items-center w-screen h-screen overflow-y-auto">
      <div className="flex bg-second w-8/12 justify-center items-center p-12 border border-gray-400 rounded-md border-opacity-40">
        <div className="flex flex-col border border-gray-200 border-opacity-60 rounded-md">
          <div className="flex  flex-wrap border-b border-gray-200 border-opacity-100">
            <div
              className="p-6 pr-20 bg-second border-r border-r-gray-200 border-opacity-40 "
              data-testid="event-meta"
            >
              <ul className="flex items-center">
                <li className="-mr-1 inline-block">
                  <a data-state="closed" href={`/${User.username}`}>
                    <span
                      data-testid="avatar"
                      className="bg-emphasis item-center relative inline-flex aspect-square justify-center rounded-full align-top overflow-hidden border-subtle w-6 h-6 min-w-6 min-h-6"
                    >
                      <img
                        alt="Ankur Sharma"
                        className="aspect-square rounded-full w-6 h-6 min-w-6 min-h-6"
                        src={User ? User.userProfile : ""}
                      />
                    </span>
                  </a>
                </li>
              </ul>
              <p className="text-input text-opacity-50 mt-2 text-sm font-heading font-semibold">
                {User ? User.username : ""}
              </p>
              <h1
                data-testid="event-title"
                className="text-mainText font-heading text-xl font-semibold my-6"
              >
                {User && User.meeting.title}
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-clock relative z-20 mr-2 mt-[2px] h-4 w-4 flex-shrink-0 rtl:ml-2 text-mainText"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <div className="relative z-10 max-w-full break-words text-mainText font-heading">
                    {User && User.meeting.duration} minutes
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
                          Google Meet
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

          .react-calendar__month-view__weekdays__weekday {
            color: #D9D9D9;
            opacity: 0.7;
            padding-bottom: 20px;
            font:"Poppins", "sans-serif"
          }

          .react-calendar__tile {
            background: transparent;
            transition: opacity 0.2s ease;
            border: none;
            color: #fff;
          }

          .clickable-date {
            border: none; 
            background-color: #929599 !important;
            opacity: 0.5;
            color: black;
            border-radius: 5px;
            cursor: pointer;
          }

          .clickable-date:hover{
            background-color: #121212 !important;
            color: white;
            opacity:1;
          }

          .react-calendar__tile--active {
            background: #121212 !important;
            color: #fff;
            opacity: 1;
            border-radius: 5px;
          }
          
          .react-calendar__tile--hasActive {
            color: black; 
          }

          .not-clickable-date {
            cursor: not-allowed !important;
            pointer-events: none; 
          }
          
          .not-clickable-date:hover {
            background-color: transparent !important;
            color: inherit !important;
          }
        `}
              </style>
              <Calendar
                onChange={(date: Date) => {
                  handleDateChange(date);
                }}
                tileClassName={tileClassName}
              />
            </div>

            <div className="flex flex-col w-[200px] border-l border-gray-400 border-opacity-40">
              <div className="p-4 h-14">
                <span className="font-heading text-mainText ">
                  {selectedDate &&
                    selectedDate.toLocaleDateString("en-US", {
                      weekday: "short",
                    })}{" "}
                  {selectedDate && selectedDate.getDate()}
                </span>
              </div>
              <div className="w-full flex flex-col items-center h-[282px] overflow-y-auto scrollbar-thin scrollbar-thumb-black scrollbar-track-black">
                {meetingTime.map((time, index) => (
                  <TimeCard
                    key={index}
                    time={time}
                    isSelected={selectedTime === time}
                    onSelect={handleTimeSelect}
                  />
                ))}
              </div>
              <div></div>
            </div>
          </div>
          <div className="p-6 pt-8">
            <div>
              <div className="mb-2 flex items-center">
                <label className="text-mainText font-heading mb-2 text-sm font-medium leading-none  flex">
                  <span>Additional notes</span>
                  <span className="text-emphasis -mb-1 ml-1 text-sm font-medium leading-none"></span>
                </label>
              </div>
              <textarea
                placeholder="Please share anything regarding this meeting."
                name="notes"
                className="hover:border-emphasis border-input bg-transparent placeholder:text-muted text-mainText text-opacity-60 focus:ring-brand-default focus:border-subtle mb-2 block w-full rounded-md border px-3 py-2 text-sm transition focus:outline-none focus:ring-2 focus:ring-offset-1"
                value={additionalNotes}
                onChange={(e) => setAdditonalNotes(e.target.value)}
              ></textarea>
            </div>
            <div className="flex w-full justify-center items-center">
              {selectedDetails ? (
                <button
                  data-testid="confirm-book-button"
                  type="submit"
                  onClick={handleSubmit}
                  className="whitespace-nowrap w-full py-3 text-center text-sm font-medium relative rounded-lg transition disabled:cursor-not-allowed bg-input bg-opacity-50 hover:bg-opacity-90 font-heading hover:bg-brand-emphasis focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-default text-main font-heading"
                >
                  Schedule Meeting
                </button>
              ) : (
                <div className="rounded-lg w-full cursor-not-allowed text-mainText font-heading bg-home font-medium text-center border text-sm py-3">
                  Select date and time
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleBooking;
