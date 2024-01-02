import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";

import("./style/reset.css");
import("./style/main.css");

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Profiles from "./components/Profiles/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/profile",
        element: <Profiles />,
        children: [
          { path: "", element: <Profile /> },
          { path: ":id", element: <Profile /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
