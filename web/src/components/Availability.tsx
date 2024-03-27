import React, { useState } from "react";

const AvailabilityForm = () => {
  const [availability, setAvailability] = useState([
    { day: "Sunday", from: "", to: "" },
    { day: "Monday", from: "", to: "" },
    { day: "Tuesday", from: "", to: "" },
    { day: "Wednesday", from: "", to: "" },
    { day: "Thursday", from: "", to: "" },
    { day: "Friday", from: "", to: "" },
    { day: "Saturday", from: "", to: "" },
  ]);

  const handleTimeChange = (dayIndex, field, value) => {
    const updatedAvailability = [...availability];
    updatedAvailability[dayIndex][field] = value;
    setAvailability(updatedAvailability);
  };

  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked((toggleSwitch) => !toggleSwitch);
  };

  const timeOptions = [
    "00:00",
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
  ];

  return (
    <div className="flex justify-center p-4">
      <div className="p-4 bg-second w-5/12 rounded-3xl">
        <h2 className="text-3xl font-bold mb-4 text-mainText font-heading text-center">
          Availability Form
        </h2>
        <form className="mt-8">
          <div>
            {availability.map((day, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex justify-around py-2">
                  <div
                    className="relative inline-block w-10 mr-2 align-middle select-none"
                    onClick={toggleSwitch}
                  >
                    <input
                      type="checkbox"
                      id="toggle"
                      className="absolute block w-6 h-6 rounded-full bg-main border-4 appearance-none cursor-pointer"
                    />
                    <label
                      htmlFor="toggle"
                      className={`block overflow-hidden h-6 rounded-full cursor-pointer
                      ${isChecked ? "bg-mainText" : "bg-input bg-opacity-40"}`}
                    ></label>
                  </div>
                  <h3 className="text-lg font-semibold text-mainText font-heading mb-2 w-2/12">
                    {day.day}
                  </h3>
                  <label className="flex items-center">
                    <select
                      className="border border-gray-400 bg-transparent text-mainText text-center w-24 rounded py-1"
                      value={day.from}
                      onChange={(e) =>
                        handleTimeChange(index, "from", e.target.value)
                      }
                    >
                      {timeOptions.map((time, idx) => (
                        <option
                          key={idx}
                          value={time}
                          className="bg-second text-mainText"
                        >
                          {time}
                        </option>
                      ))}
                    </select>
                  </label>
                  <div className="flex items-center justify-center">
                    <span className="text-mainText font-heading font-bold">
                      {" "}
                      -{" "}
                    </span>
                  </div>
                  <label className="flex items-center">
                    <select
                      className="border border-gray-400 bg-transparent text-mainText text-center w-24 rounded py-1"
                      value={day.to}
                      onChange={(e) =>
                        handleTimeChange(index, "to", e.target.value)
                      }
                    >
                      {timeOptions.map((time, idx) => (
                        <option
                          key={idx}
                          value={time}
                          className="bg-second text-mainText"
                        >
                          {time}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </form>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          onClick={() => console.log(availability)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AvailabilityForm;
