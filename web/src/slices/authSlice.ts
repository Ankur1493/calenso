import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo") || "null") : null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      const userInfo = localStorage.getItem("userInfo");
      const profilePicture = userInfo ? JSON.parse(userInfo).profilePicture ? true : false : false;
      if (profilePicture) {
        localStorage.setItem("isConnected", "true")
      }
    },
    removeCredentials: (state, _) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo")
      localStorage.removeItem("isConnected")
    }
  }
});

export const { setCredentials, removeCredentials } = authSlice.actions;

export default authSlice.reducer;
