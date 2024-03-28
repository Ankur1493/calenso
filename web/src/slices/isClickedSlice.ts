import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMeetingFormClicked: false,
  isAvailabilityClicked: false,
};

const isClickedSlice = createSlice({
  name: "isClicked",
  initialState,
  reducers: {
    IsMeetingFormClicked(state) {
      state.isMeetingFormClicked = !state.isMeetingFormClicked;
    },
    IsAvailabilityClicked(state) {
      state.isAvailabilityClicked = !state.isAvailabilityClicked;
    },
  },
});

export const { IsMeetingFormClicked, IsAvailabilityClicked } =
  isClickedSlice.actions;
export default isClickedSlice.reducer;
