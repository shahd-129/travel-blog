import { baseApiSlice } from "./baseApiSlice";

export const notificationsApi = baseApiSlice
  .enhanceEndpoints({ addTagTypes: ["NOTIFICATIONS"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getAllNotifications: builder.query({
        query: ({ id }) => ({
          url: `/notifications/${id}`,
          method: "GET",
        }),
        providesTags: ["NOTIFICATIONS"],
      }),
      createNotifications: builder.mutation({
        query: (body) => ({
          url: "notifications",
          method: "POST",
          body,
        }),
        invalidatesTags: ["NOTIFICATIONS"],
      }),
    }),
  });

export const { useCreateNotificationsMutation, useGetAllNotificationsQuery } =
  notificationsApi;
