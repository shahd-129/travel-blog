import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout";
import SignUp from "../auth/signUp";
import Login from "../auth/Login";
import LayoutAuth from "../layout/layoutAuth";
import Posts from "../view/posts";
import Users from "../view/users";
import PostDetails from "../view/posts/PostDetails";
import Dashboard from "../view/dashboard";
import LayoutView from "../layout/layoutView";
import PostUpdate from "../view/posts/PostUpdate";
import PostCreate from "../view/posts/PostCreate";
import LayoutHome from "../layout/LayoutHome";
import PostsList from "../components/Posts";
import Details from "../components/Posts/Details";

export default function Routes() {
  let router = createBrowserRouter([
    {
      path: "/auth",
      element: <LayoutAuth />,
      children: [
        { path: "signup", element: <SignUp /> },

        { path: "login", element: <Login /> },
      ],
    },
    {
      path: "/",
      element: <Layout />, children: [
        { index: true, element: <LayoutHome /> },
        { path: "/post/:id", element: <Details /> },
        { path: "/posts/:category", element: <PostsList /> }
        
      ]
    },
    {
      path: "/dashboard",
      element: <LayoutView />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "posts", element: <Posts />, },
        { path: "postForm", element: <PostCreate /> },
        { path: "postForm/:id", element: <PostUpdate /> },
        { path: "users", element: <Users /> },
        { path: "posts/:id", element: <PostDetails /> }
      ]
    }

  ]);
  return <RouterProvider router={router} />;
}
