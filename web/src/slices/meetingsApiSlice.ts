// import { MEETINGS_URL } from "../constants/constants";
import { apiSlice } from "./apiSlice";

export const meetingsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    meetings: builder.query({
      query: () => ({
        url: `meetings/all`,
        method: "GET",
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useMeetingsQuery } = meetingsApiSlice;
