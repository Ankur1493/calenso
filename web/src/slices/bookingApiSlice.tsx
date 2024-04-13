import { BOOKINGS_URL } from "../constants/constants";
import { apiSlice } from "./apiSlice";

export const bookingApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    bookings: builder.query({
      query: () => ({
        url: `${BOOKINGS_URL}`,
        method: "GET",
      }),
      keepUnusedDataFor: 5,
    }),
    cancelBooking: builder.mutation({
      query: (meetingId) => ({
        url: `${BOOKINGS_URL}/${meetingId}`,
        method: "DELETE",
      })
    })
  }),
});

export const { useBookingsQuery, useCancelBookingMutation } = bookingApiSlice;
