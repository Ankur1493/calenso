import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMeetingFormClicked: false,
  isAvailabilityClicked: false,
  isDetailsClicked: false,
  isConnectClicked: false,
  isConnected: localStorage.getItem("isConnected") ? true : false,
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
    IsConnectClicked(state) {
      state.isConnectClicked = !state.isConnectClicked;
    },
    IsConnected(state) {
      const isConnected = localStorage.getItem("isConnected") ? true : false
      state.isConnected = isConnected;
    }
  },
});

export const {
  IsMeetingFormClicked,
  IsAvailabilityClicked,
  IsDetailsClicked,
  IsConnectClicked,
  IsConnected,
} = isClickedSlice.actions;
export default isClickedSlice.reducer;
