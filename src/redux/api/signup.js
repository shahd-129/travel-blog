import { baseApiSlice } from "./baseApiSlice";

export const authApi = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (body) => ({
        url: "auth/signup",
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "auth/signin",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSignupMutation, useLoginMutation } = authApi;
