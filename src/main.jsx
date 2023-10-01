import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Root/Root";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import AuthProvider from "./providers/AuthProvider";
import Supplier from "./Supplier/Supplier";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Supplier>
      <RouterProvider router={router} />
      </Supplier>
    </AuthProvider>
  </React.StrictMode>
);
