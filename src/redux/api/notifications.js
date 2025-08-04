import { baseApiSlice } from "./baseApiSlice";

export const notificationsApi = baseApiSlice
  .enhanceEndpoints({ addTagTypes: ["NOTIFICATIONS"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getAllNotifications: builder.query({
        query: ({ userId }) => ({
          url: `/notifications/${userId}`,
          method: "GET",
        }),
        providesTags: ["NOTIFICATIONS"],
      }),
      markNotificationasSeen: builder.mutation({
        query: ({ id }) => ({
          url: `notifications/seen/${id}`,
          method: "PUT",
        }),
        invalidatesTags: ["NOTIFICATIONS"],
      }),
    }),
  });

export const {
  useGetAllNotificationsQuery,
  useMarkNotificationasSeenMutation,
} = notificationsApi;
