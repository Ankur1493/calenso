import React, { useState } from "react";
import { IsAvailabilityClicked } from "../slices/isClickedSlice";
import { useDispatch } from "react-redux";
import { days, timeOptions } from "../constants/constants";

const AvailabilityForm = () => {
  const dispatch = useDispatch();

  const [availability, setAvailability] = useState([]);
  const [activeDays, setActiveDays] = useState(Array(days.length).fill(false));

  const handleTimeChange = (dayIndex, field, value) => {
    const updatedAvailability = [...availability];
    updatedAvailability[dayIndex][field] = value;
    setAvailability(updatedAvailability);
  };

  const handleAvailabilityClick = () => {
    dispatch(IsAvailabilityClicked());
  };

  const handleSelected = (dayIndex) => {
    setActiveDays((prevActiveDays) => {
      const updatedActiveDays = [...prevActiveDays];
      updatedActiveDays[dayIndex] = !updatedActiveDays[dayIndex];
      return updatedActiveDays;
    });
  };

  return (
    <div className="flex justify-center p-4 fixed inset-0 items-center z-20">
      <div className="p-4 pt-8 bg-second w-[500px] rounded-2xl border border-gray-400 h-[600px]">
        <h3 className="font-semibold font-heading text-mainText pb-1 text-2xl ml-[20px]">
          Create a new event type
        </h3>
        <form className="mt-6">
          <div>
            {days.map((day, index) => (
              <div key={index} className="flex flex-col py-1">
                <div className="flex justify-around py-2 ml-[-20px]">
                  <div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        onClick={() => handleSelected(index)}
                      />
                      <div
                        className={`w-11 h-6 bg-input bg-opacity-40 border border-gray-400 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-main rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-main after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${
                          activeDays[index] ? "peer-checked:bg-gray-200" : ""
                        }`}
                      ></div>
                    </label>
                  </div>
                  <h3 className="ml-[-60px] text-md text-mainText font-heading mb-2 w-2/12">
                    {day}
                  </h3>
                  <div className="flex gap-2">
                    <label className="flex items-center">
                      <select
                        className="border border-gray-400 bg-transparent text-mainText text-center w-24 rounded py-1"
                        // value={day.from}
                        onChange={(e) =>
                          handleTimeChange(index, "from", e.target.value)
                        }
                      >
                        {activeDays[index] &&
                          timeOptions.map((time, idx) => (
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
                      <span className="text-mainText font-heading">-</span>
                    </div>
                    <label className="flex items-center">
                      <select
                        className="border border-gray-400 bg-transparent text-mainText text-center w-24 rounded py-1"
                        // value={day.to}
                        onChange={(e) =>
                          handleTimeChange(index, "to", e.target.value)
                        }
                      >
                        {activeDays[index] &&
                          timeOptions.map((time, idx) => (
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
              </div>
            ))}
          </div>
        </form>
        <div className="flex justify-end gap-2 mt-6 mr-10">
          <button
            className="inline-flex items-center text-sm font-medium relative rounded-md transition h-9 px-4 py-2.5 text-mainText font-heading hover:bg-secondText hover:bg-opacity-40"
            onClick={handleAvailabilityClick}
          >
            Back
          </button>
          <button
            className="inline-flex items-center text-sm font-medium relative rounded-md transition h-9 px-4 py-2.5 bg-mainText text-main font-heading hover:bg-opacity-80"
            onClick={() => console.log(availability)}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityForm;
