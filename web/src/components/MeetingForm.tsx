import React, { useEffect, useState } from "react";
import { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import {
  IsMeetingFormClicked,
  IsAvailabilityClicked,
} from "../slices/isClickedSlice";
import { setActiveMeetingInfo } from "../slices/meetingSlice";
import { toast } from "react-toastify";
import { z } from "zod";

function MeetingForm() {
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const { meetingInfo } = useSelector(
    (state: RootState) =>
      state.meetings.activeMeetingInfo || { meetingInfo: null }
  );
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState<number>();

  const meetingSchema = z.object({
    title: z
      .string()
      .min(4, { message: "title should be longer than 4 characters" }),
    description: z
      .string()
      .min(50, { message: "description should be longer than 100 characters" })
      .max(200, { message: "description should be less than 250 characters" }),
    duration: z
      .number()
      .min(5, { message: "meeting should be longer than 5 minutes" })
      .max(60, { message: "meeting should be equal or less than 60 minutes" }),
  });

  useEffect(() => {
    if (meetingInfo) {
      setTitle(meetingInfo.title);
      setDuration(meetingInfo.duration);
      setDescription(meetingInfo.info);
    }
  }, [meetingInfo]);

  const handleMeetingClick = () => {
    dispatch(IsMeetingFormClicked());
  };

  const handleAvailabilityClick = () => {
    dispatch(IsAvailabilityClicked());
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(Number(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const durationNumber = Number(duration);
    try {
      meetingSchema.parse({
        title,
        duration: durationNumber,
        description,
      });
      dispatch(
        setActiveMeetingInfo({
          meetingInfo: {
            title: title,
            duration: Number(duration),
            info: description,
          },
        })
      );
      handleAvailabilityClick();
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      }
    }
  };

  return (
    <div className="flex justify-center fixed inset-0 items-center z-20">
      <div className="bg-second flex flex-col justify-left px-8 pt-8 w-[500px] rounded-2xl border border-gray-400 h-[600px]">
        <div>
          <h3 className="font-semibold font-heading text-mainText pb-1 text-2xl">
            Create a new event type
          </h3>
        </div>
        <div className="font-heading text-mainText opacity-70 text-1xl font-light">
          Create a new event type for people to book times with.
        </div>
        <div className="mt-4">
          <form className="flex flex-col py-6" onSubmit={handleSubmit}>
            <label
              htmlFor="title"
              className="block text-md font-heading text-mainText"
            >
              Title
            </label>
            <input
              className="px-4 py-2 w-full focus:outline-mainText rounded bg-transparent border border-gray-400 opacity-60 font-heading text-mainText"
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={handleTitleChange}
              placeholder="Quick Chat"
            />
            <label
              htmlFor="url"
              className="block pt-6 text-md font-heading text-mainText"
            >
              URL
            </label>
            <input
              className="px-4 py-2 w-full focus:outline-mainText rounded bg-transparent border border-gray-400 font-heading text-mainText"
              type="text"
              name="url"
              id="url"
              placeholder={
                userInfo
                  ? `http://localhost:5173/${userInfo.username}`
                  : "http://localhost:5173/"
              }
              readOnly
            />
            <textarea
              className="rounded px-4 py-2 bg-transparent mt-8 font-heading text-mainText border border-gray-400 opacity-60 focus:outline-mainText"
              name="description"
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              placeholder="A short description"
            ></textarea>
            <label
              htmlFor="duration"
              className="block pt-6 text-md font-heading text-mainText"
            >
              Duration
            </label>
            <div className="flex">
              <input
                className="px-4 py-2 w-9/12 focus:outline-mainText rounded-s bg-transparent border border-gray-400 opacity-60 font-heading text-mainText"
                type="number"
                name="duration"
                id="duration"
                value={duration}
                onChange={handleDurationChange}
                placeholder="15"
              />
              <div className="w-3/12 bg-secondText bg-opacity-20 h-full flex justify-center align-center rounded-e py-2 border border-gray-400">
                <span className="text-mainText ">Minutes</span>
              </div>
            </div>
            <div className="mt-8">
              <hr className="opacity-20 w-full" />
            </div>
            <div className="flex justify-end space-x-2 py-6">
              <button
                type="button"
                className="inline-flex items-center text-sm font-medium relative rounded-md transition h-9 px-4 py-2.5 text-mainText font-heading hover:bg-secondText hover:bg-opacity-40"
                onClick={handleMeetingClick}
              >
                Close
              </button>
              <button
                type="submit"
                className="inline-flex items-center text-sm font-medium relative rounded-md transition h-9 px-4 py-2.5 bg-mainText text-main font-heading hover:bg-opacity-80"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MeetingForm;
