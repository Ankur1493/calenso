import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  IsAvailabilityClicked,
  IsMeetingFormClicked,
} from "../slices/isClickedSlice";
import {
  clearActiveAvailabilitySchedule,
  clearActiveMeetingInfo,
  setActiveAvailabilitySchedule,
} from "../slices/meetingSlice";
import { days, timeOptions } from "../constants/constants";
import { useNavigate } from "react-router-dom";
import { useCreateMeeting } from "../Hooks/useCreateMeeting";
import { toast } from "react-toastify";

const AvailabilityForm = () => {
  const { createNewMeeting } = useCreateMeeting();

  const dispatch = useDispatch();
  const [availability, setAvailability] = useState<
    { DAY: string; START_TIME: string; END_TIME: string }[]
  >([]);
  const [activeDays, setActiveDays] = useState<boolean[]>(
    Array(days.length).fill(false)
  );
  const navigate = useNavigate();
  const handleTimeChange = (dayIndex: number, field: string, value: string) => {
    const updatedAvailability = [...availability];
    if (!updatedAvailability[dayIndex]) {
      updatedAvailability[dayIndex] = {
        DAY: days[dayIndex],
        START_TIME: "00:00",
        END_TIME: "",
      };
    }
    updatedAvailability[dayIndex][field] = value;
    setAvailability(updatedAvailability);
  };

  const handleAvailabilityClick = () => {
    dispatch(IsAvailabilityClicked());
  };

  const handleSelected = (dayIndex: number) => {
    setActiveDays((prevActiveDays) => {
      const updatedActiveDays = [...prevActiveDays];
      updatedActiveDays[dayIndex] = !updatedActiveDays[dayIndex];
      return updatedActiveDays;
    });
  };

  const handleSubmit = async () => {
    const availabilityData = availability.filter((day) => day !== undefined);
    console.log(availabilityData)
    if (availabilityData.length === 0) {
      toast.error("you need to mark atleast one day available")
      return;
    }
    dispatch(
      setActiveAvailabilitySchedule({ availabilitySchedule: availabilityData })
    );
    try {
      const response = await createNewMeeting();
      navigate(`/home/meeting/${response.meetingId}`);
      dispatch(clearActiveMeetingInfo());
      dispatch(clearActiveAvailabilitySchedule());
      dispatch(IsAvailabilityClicked());
      dispatch(IsMeetingFormClicked());
      toast.success(response.message);
    } catch (error) {
      console.error("Error creating meeting:", error);
      toast.error(error?.data?.message || error?.error);
    }
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
                        className={`w-11 h-6 bg-input bg-opacity-40 border border-gray-400 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-main rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-main after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${activeDays[index] ? "peer-checked:bg-gray-200" : ""
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
                        onChange={(e) =>
                          handleTimeChange(index, "START_TIME", e.target.value)
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
                        onChange={(e) =>
                          handleTimeChange(index, "END_TIME", e.target.value)
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
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityForm;
