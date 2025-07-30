import { baseApiSlice } from "./baseApiSlice";

export const usersApi = baseApiSlice
  .enhanceEndpoints({ addTagTypes: ["USERS"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getAllUsers: builder.query({
        query: () => ({
          url: "users",
          method: "GET",
        }),
        providesTags: ["USERS"],
      }),
      updateUser: builder.mutation({
        query: ({ id, ...data }) => ({
          url: `/users/${id}`,
          method: "PUT",
          body: data,
        }),
        invalidatesTags: ["USERS"],
      }),
      deleteUser: builder.mutation({
        query: (id) => ({
          url: `users/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["USERS"],
      }),
    }),
  });

export const { 
    useDeleteUserMutation , useGetAllUsersQuery , useUpdateUserMutation
} = usersApi;
