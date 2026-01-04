import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./rootLayout/RootLayout";
import Home from "./pages/Home/Home";
import LogIn from "./pages/Login/LogIn";
import Register from "./pages/Register/Register";
import ResetPass from "./pages/Login/ResetPass";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            path: "/",
            Component: Home
        },
        {
            path:"/login",
            Component:LogIn
        },
        {
            path:"/register",
            Component: Register
        },
        {
          path:"/reset",
          Component:ResetPass
        }
    ]
  },
]);