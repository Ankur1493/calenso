import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookings: [],
  loading: false,
  error: null,
};

const bookingSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    setBookings: (state, action) => {
      state.bookings = action.payload;
    },

    markBookingCanceled: (state, action) => {
      const bookingId = action.payload;
      const index = state.bookings.findIndex(booking => booking._id === bookingId);
      if (index !== -1) {
        state.bookings[index].canceled = true;
      }
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setBookings, setLoading, setError, markBookingCanceled } = bookingSlice.actions;
export default bookingSlice.reducer;
