import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Meeting {
  _id?: string;
  title: string;
  duration: number;
  info: string;
}

interface MeetingInfo {
  meetingInfo: Meeting;
}

interface AvailabilitySchedule {
  DAY: string;
  START_TIME: string;
  END_TIME: string;
}

interface AvailabilityScheduleInfo {
  availabilitySchedule: AvailabilitySchedule[];
}

interface MeetingState {
  meetings: Meeting[];
  activeMeetingInfo: MeetingInfo | null;
  activeAvailabilitySchedule: AvailabilityScheduleInfo | null;
}

const initialState: MeetingState = {
  meetings: [],
  activeMeetingInfo: null,
  activeAvailabilitySchedule: null,
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
      state.meetings = state.meetings.filter(
        (meeting) => meeting._id !== idToDelete
      );
    },
    setActiveMeetingInfo: (
      state,
      action: PayloadAction<{ meetingInfo: Meeting }>
    ) => {
      state.activeMeetingInfo = {
        meetingInfo: action.payload.meetingInfo,
      };
    },
    setActiveAvailabilitySchedule: (
      state,
      action: PayloadAction<{ availabilitySchedule: AvailabilitySchedule[] }>
    ) => {
      state.activeAvailabilitySchedule = {
        availabilitySchedule: action.payload.availabilitySchedule,
      };
    },
    clearActiveMeetingInfo: (state) => {
      state.activeMeetingInfo = null;
    },
    clearActiveAvailabilitySchedule: (state) => {
      state.activeAvailabilitySchedule = null;
    },
  },
});

export const {
  setMeetingIds,
  deleteMeetingId,
  setActiveMeetingInfo,
  setActiveAvailabilitySchedule,
  clearActiveMeetingInfo,
  clearActiveAvailabilitySchedule,
} = meetingSlice.actions;

export default meetingSlice.reducer;
