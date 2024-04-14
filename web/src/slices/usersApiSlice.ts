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
    signup: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/signup`,
        method: "POST",
        body: data
      })
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${AUTH_URL}/logout`,
        method: "POST",
      })
    }),
    getUserDetails: builder.query({
      query: (username) => ({
        url: `${AUTH_URL}/${username}`,
        method: "GET"
      })
    })
  })
})

export const { useLoginMutation, useLogoutMutation, useSignupMutation, useGetUserDetailsQuery } = usersApiSlice;
