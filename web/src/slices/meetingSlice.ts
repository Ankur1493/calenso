import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Meeting {
  _id: string;
  title: string;
  duration: number;
  info: string;
}
interface AvailabilitySchedule {
  DAY: string;
  START_TIME: string;
  END_TIME: string;
}

interface MeetingState {
  meetings: Meeting[];
  activeMeeting: {
    meetingInfo: Meeting;
    availabilitySchedule: AvailabilitySchedule[];
  } | null;
}


const initialState: MeetingState = {
  meetings: [],
  activeMeeting: null
};

const meetingSlice = createSlice({
  name: "meetingsID",
  initialState,
  reducers: {
    setMeetingIds: (state, action: PayloadAction<Meeting[]>) => {
      state.meetings = action.payload;
    },

    deleteMeetingId: (state, action: PayloadAction<{ id: string }>) => {
      const idToDelete = action.payload.id;
      state.meetings = state.meetings.filter(meeting => meeting._id !== idToDelete);
    },
    setActiveMeeting: (state, action: PayloadAction<{ meetingInfo: Meeting; availabilitySchedule: AvailabilitySchedule[] }>) => {
      state.activeMeeting = {
        meetingInfo: action.payload.meetingInfo,
        availabilitySchedule: action.payload.availabilitySchedule
      };
      console.log(state.activeMeeting)
    },
    clearActiveMeeting: (state) => {
      state.activeMeeting = null;
    }
  }
});

export const { setMeetingIds, deleteMeetingId, setActiveMeeting, clearActiveMeeting } = meetingSlice.actions;

export default meetingSlice.reducer;

