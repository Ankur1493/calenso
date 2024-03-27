// isClickedSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isClicked: false,
};

const isClickedSlice = createSlice({
  name: "isClicked",
  initialState,
  reducers: {
    toggleIsClicked(state) {
      state.isClicked = !state.isClicked;
    },
  },
});

export const { toggleIsClicked } = isClickedSlice.actions;
export default isClickedSlice.reducer;
