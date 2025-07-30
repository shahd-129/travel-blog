import { baseApiSlice } from "./baseApiSlice";

export const postsApi = baseApiSlice
  .enhanceEndpoints({ addTagTypes: ["POSTS"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getAllPosts: builder.query({
        query: ({category}) => ({
          url: "posts",
          method: "GET",
          params: {
            category,
          },
        }),
        providesTags: ["POSTS"],
      }),
      getPostById: builder.query({
        query: (id) => ({
          url: `posts/${id}`,
          method: "GET",
        }),
        providesTags: ["POSTS"],
      }),
      createPost: builder.mutation({
        query: (body) => ({
          url: "posts",
          method: "POST",
          body,
        }),
        invalidatesTags: ["POSTS"],
      }),

      updatePost: builder.mutation({
        query: ({ id, ...data }) => ({
          url: `/posts/${id}`,
          method: "PUT",
          body: data,
        }),
        invalidatesTags: ["POSTS"],
      }),
      deletePost: builder.mutation({
        query: (id) => ({
          url: `posts/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["POSTS"],
      }),
      likePost: builder.mutation({
        query: ({ id }) => ({
          url: `posts/${id}/like`,
          method: "PUT",
        }),
      }),
    }),
  });

export const {
  useCreatePostMutation,
  useGetAllPostsQuery,
  useDeletePostMutation,
  useUpdatePostMutation,
  useLikePostMutation,
  useGetPostByIdQuery,
} = postsApi;
