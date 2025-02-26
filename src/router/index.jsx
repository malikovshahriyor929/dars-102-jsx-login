import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainLayout";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import ForgetPassword from "../pages/forgotPassword";
import ProtectedRoute from "../components/protect";
import ForgetSet from "../pages/forgetSet";

export let router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forgotPassword",
        element: <ForgetPassword />,
      },
      {
        path: "/forgotSet",
        element: <ForgetSet />,
      },
    ],
  },
]);
