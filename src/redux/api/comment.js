import { baseApiSlice } from "./baseApiSlice";

export const commentApi = baseApiSlice
  .enhanceEndpoints({ addTagTypes: ["COMMENT"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      createComment: builder.mutation({
        query: ({ data, id }) => ({
          url: `/posts/${id}/comments`,
          method: "PUT",
          body: data,
        }),
        invalidatesTags: ["COMMENT"],
      }),
      deleteComment: builder.mutation({
        query: ({ id, commentId }) => ({
          url: `/posts/${id}/comments/${commentId}`,
          method: "DELETE",
        }),
        invalidatesTags: ["COMMENT"],
      }),
    }),
  });

export const { useCreateCommentMutation, useDeleteCommentMutation } =
  commentApi;
