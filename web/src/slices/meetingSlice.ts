import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Meeting {
  id: string; // or whatever type your meeting id is
}

interface MeetingState {
  meetings: Meeting[];
}

const initialState: MeetingState = { meetings: [] };

const meetingSlice = createSlice({
  name: "meetingsID",
  initialState,
  reducers: {
    setMeetingIds: (state, action: PayloadAction<Meeting[]>) => {
      state.meetings = action.payload;
    },
    deleteMeetingId: (state, action: PayloadAction<{ id: string }>) => {
      const idToDelete = action.payload.id;
      state.meetings = state.meetings.filter(meeting => meeting.id !== idToDelete);
    }
  }
});

export const { setMeetingIds, deleteMeetingId } = meetingSlice.actions;

export default meetingSlice.reducer;
