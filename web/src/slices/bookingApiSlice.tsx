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
      query: (data) => {
        console.log('Attempting to create booking with data:', data);
        return {
          url: `${BOOKINGS_URL}`,
          method: "POST",
          body: data
        };
      }
    }),
    bookingDetails: builder.query({
      query: (id) => ({
        url: `${BOOKINGS_URL}/${id}`,
        method: "GET"
      })
    }),
    cancelBooking: builder.mutation({
      query: (meetingId) => ({
        url: `${BOOKINGS_URL}/${meetingId}`,
        method: "DELETE",
      })
    })
  }),
});

export const { useBookingsQuery, useCreateBookingMutation, useBookingDetailsQuery, useCancelBookingMutation } = bookingApiSlice;
