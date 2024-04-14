import meet from "../assets/icons/meet.png";
import Calendar from "../components/Calendar";
import { meetingTime } from "../constants/constants";
import TimeCard from "../components/TimeCard";
import { useState } from "react";
import { toast } from "react-toastify";


function ScheduleBooking() {
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [additionalNotes, setAdditonalNotes] = useState("");
  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time: null | string) => {
    setSelectedTime(time);
  };

  const handleSubmit = () => {
    console.log("Selected Date:", selectedDate);
    console.log(
      "Selected Day:",
      selectedDate.toLocaleDateString("en-US", { weekday: "long" })
    );
    console.log("Selected Time:", selectedTime);
    setSelectedTime(null);
    setSelectedDate(new Date())
    setAdditonalNotes("")
    toast.success("meeting booked")
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex bg-second w-8/12 justify-center items-center p-12 border border-gray-400 rounded-md border-opacity-40">
        <div className="flex flex-col border border-gray-200 border-opacity-60 rounded-md">
          <div className="flex border-b border-gray-200 border-opacity-100">
            <div
              className="p-6 pr-20 bg-second border-r border-r-gray-200 border-opacity-40 "
              data-testid="event-meta"
            >
              <ul className="flex items-center">
                <li className="-mr-1 inline-block">
                  <a
                    data-state="closed"
                    href="https://cal.com/ankur-sharma?redirect=false"
                  >
                    <span
                      data-testid="avatar"
                      className="bg-emphasis item-center relative inline-flex aspect-square justify-center rounded-full align-top overflow-hidden border-subtle w-6 h-6 min-w-6 min-h-6"
                    >
                      <img
                        alt="Ankur Sharma"
                        className="aspect-square rounded-full w-6 h-6 min-w-6 min-h-6"
                        src="https://lh3.googleusercontent.com/a/ACg8ocL8zHgRMu9d_CrZt2fNCGZPWOcuALthFOyWL-oHCWmZmEA=s96-c"
                      />
                    </span>
                  </a>
                </li>
              </ul>
              <p className="text-input text-opacity-50 mt-2 text-sm font-heading font-semibold">
                Ankur Sharma
              </p>
              <h1
                data-testid="event-title"
                className="text-mainText font-heading text-xl font-semibold my-6"
              >
                15 Min Meeting
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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-clock relative z-20 mr-2 mt-[2px] h-4 w-4 flex-shrink-0 rtl:ml-2 text-mainText"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <div className="relative z-10 max-w-full break-words text-mainText font-heading">
                    30 mins
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

            <div>
              <Calendar
                onChange={(date) => {
                  handleDateChange(date);
                }}
              />
            </div>
            <div className="flex flex-col w-[200px] border-l border-gray-400 border-opacity-40">
              <div className="p-4">
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
                onChange={(e) => (setAdditonalNotes(e.target.value))}
              ></textarea>
            </div>
            <div className="flex items-end justify-end">
              <button
                data-testid="confirm-book-button"
                type="submit"
                onClick={handleSubmit}
                className="whitespace-nowrap inline-flex items-center text-sm font-medium relative rounded-md transition disabled:cursor-not-allowed bg-mainText font-heading hover:bg-brand-emphasis focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-default text-main h-9 px-4 py-2.5"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleBooking;
