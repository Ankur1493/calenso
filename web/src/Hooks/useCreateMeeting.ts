import { useSelector } from "react-redux";
import { useCreateMeetingMutation } from "../slices/meetingsApiSlice";
import { RootState } from "../store"

export const useCreateMeeting = () => {
  const [createMeeting, { isError }] = useCreateMeetingMutation();
  const activeMeetingInfo = useSelector((state: RootState) => state.meetings.activeMeetingInfo);
  const activeAvailabilitySchedule = useSelector((state: RootState) => state.meetings.activeAvailabilitySchedule);

  const createNewMeeting = async () => {
    try {
      if (!activeMeetingInfo || !activeAvailabilitySchedule) {
        throw new Error("Active meeting info or availability schedule is missing");
      }
      console.log(activeMeetingInfo);
      console.log(activeAvailabilitySchedule)
      const response = await createMeeting({
        meetingInfo: activeMeetingInfo.meetingInfo,
        availabilitySchedule: activeAvailabilitySchedule.availabilitySchedule
      }).unwrap();
      console.log("Meeting created successfully:", response);
      return response;
    } catch (error) {
      console.error("Error creating meeting:", error);
      throw error;
    }
  };

  return { createNewMeeting, isError };
};

