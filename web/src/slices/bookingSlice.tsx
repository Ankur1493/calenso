import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Booking {
  _id: string;
  canceled: string;
}

interface BookingState {
  bookings: Booking[];
  loading: boolean;
  error: string | null;
}

const initialState: BookingState = {
  bookings: [],
  loading: false,
  error: null,
};

const bookingSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    setBookings: (state, action: PayloadAction<Booking[]>) => {
      state.bookings = action.payload;
    },

    markBookingCanceled: (state, action: PayloadAction<string>) => {
      const bookingId = action.payload;
      const index = state.bookings.findIndex(
        (booking) => booking._id === bookingId
      );
      if (index !== -1) {
        state.bookings[index].canceled = "true"; // Assuming 'true' is the string value
      }
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setBookings, setLoading, setError, markBookingCanceled } =
  bookingSlice.actions;
export default bookingSlice.reducer;
