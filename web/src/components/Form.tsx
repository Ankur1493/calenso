import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useIsClicked } from "../context/IsClickedContext";

function Form() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");

  const { userInfo } = useSelector((state: RootState) => state.auth);

  const { isClicked, setIsClicked } = useIsClicked();

  const handleClick = () => {
    setIsClicked((isClicked) => !isClicked);
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
    setDuration(e.target.value);
  };

  return (
    <div className="flex justify-center fixed inset-0 items-center z-20">
      <div className="bg-second flex flex-col justify-left px-8 pt-8 w-4/12 rounded-2xl border border-gray-400">
        <div>
          <h3 className="font-semibold font-heading text-mainText pb-1 text-2xl">
            Add a new event type
          </h3>
        </div>
        <div className="font-heading text-mainText opacity-70 text-1xl font-light">
          Create a new event type for people to book times with.
        </div>
        <div className="mt-4">
          <form className="flex flex-col py-6">
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
                  ? `http://localhost:5173/${userInfo}`
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
                min="5"
              />
              <div
                className="w-3/12 bg-secondText bg-opacity-20 h-full flex justify-center align-center rounded-e py-2 border border-gray-400
              "
              >
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
                onClick={handleClick}
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

export default Form;
