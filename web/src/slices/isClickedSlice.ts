import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMeetingFormClicked: false,
  isAvailabilityClicked: false,
  isDetailsClicked: false,
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
    IsDetailsClicked(state) {
      state.isDetailsClicked = !state.isDetailsClicked;
    },
  },
});

export const { IsMeetingFormClicked, IsAvailabilityClicked, IsDetailsClicked } =
  isClickedSlice.actions;
export default isClickedSlice.reducer;
