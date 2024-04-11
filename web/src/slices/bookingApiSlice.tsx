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
    createBooking: builder.mutation({
      query: (data) => ({
        url: `${BOOKINGS_URL}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useBookingsQuery, useCreateBookingMutation } = bookingApiSlice;
