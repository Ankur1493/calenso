import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMeetingFormClicked: false,
  isAvailabilityClicked: false,
  isDetailsClicked: false,
  isConnectClicked: true,
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

export const { IsMeetingFormClicked, IsAvailabilityClicked, IsDetailsClicked } =
  isClickedSlice.actions;
export default isClickedSlice.reducer;
