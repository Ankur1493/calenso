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
  }),
});

export const { useBookingsQuery } = bookingApiSlice;
