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
    createMeeting: builder.mutation({
      query: (data) => ({
        url: `${MEETINGS_URL}/create`,
        method: "POST",
        body: data,
      }),
    }),
    editMeeting: builder.mutation({
      query: ({ id, data }) => ({
        url: `${MEETINGS_URL}/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteMeeting: builder.mutation({
      query: (id) => ({
        url: `${MEETINGS_URL}/${id}`,
        method: "DELETE",
      }),
    }),
    displayMeetings: builder.query({
      query: (username) => ({
        url: `${MEETINGS_URL}/display/${username}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useMeetingsQuery,
  useMeetingDetailsQuery,
  useCreateMeetingMutation,
  useEditMeetingMutation,
  useDeleteMeetingMutation,
  useDisplayMeetingsQuery,
} = meetingsApiSlice;
