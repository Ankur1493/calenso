import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Form from "./MeetingForm";
import AvailabilityForm from "./Availability";

export default function CreateMeeting() {
  const isAvailabilityClicked = useSelector(
    (state: RootState) => state.isClicked.isAvailabilityClicked
  );
  return <div>{isAvailabilityClicked ? <AvailabilityForm /> : <Form />}</div>;
}
