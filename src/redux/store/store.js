// Store.js
import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../api/signup";
import tokenReducer from "../slice/tokenSlice";
import { postsApi } from "../api/posts";
import { usersApi } from "../api/users";
import { commentApi } from "../api/comment";
const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    token: tokenReducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(postsApi.middleware)
      .concat(usersApi.middleware)
      .concat(commentApi.middleware),
});

export default store;
