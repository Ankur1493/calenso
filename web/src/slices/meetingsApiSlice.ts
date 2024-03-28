import { MEETINGS_URL } from "../constants/constants";
import { apiSlice } from "./apiSlice";

export const meetingsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    meetings: builder.query({
      query: () => ({
        url: `${MEETINGS_URL}/all`,
        method: "GET",
      }),
      keepUnusedDataFor: 5,
    }),
    meetingDetails: builder.query({
      query: (id) => ({
        url: `${MEETINGS_URL}/${id}`,
        method: "GET",
      }),
      keepUnusedDataFor: 5,
    }),
    deleteMeeting: builder.mutation({
      query: (id) => ({
        url: `${MEETINGS_URL}/${id}`,
        method: "DELETE"
      })
    })
  }),
});

export const { useMeetingsQuery, useMeetingDetailsQuery, useDeleteMeetingMutation } = meetingsApiSlice;
