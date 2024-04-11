import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMeetingFormClicked: false,
  isAvailabilityClicked: false,
  isDetailsClicked: false,
  isConnectClicked: false,
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
    IsConnecClicked(state) {
      state.isConnectClicked = !state.isConnectClicked;
    },
  },
});

export const {
  IsMeetingFormClicked,
  IsAvailabilityClicked,
  IsDetailsClicked,
  IsConnecClicked,
} = isClickedSlice.actions;
export default isClickedSlice.reducer;
