import { apiSlice } from "./apiSlice";
import { AUTH_URL } from "../constants/constants";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        body: data
      }),
    }),
  })
})

export const { useLoginMutation } = usersApiSlice;
