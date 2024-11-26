import { Navigate } from "react-router-dom";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import ForgotPassword from "../components/ForgotPassword";
import ResetPassword from "../components/ResetPassword";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = [
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },
  {
    path: "/resetpassword/:token",
    element: <ResetPassword />,
  },
  //   {
  //     path: "/home",
  //     element: (
  //       <ProtectedRoute>
  //         <Home />
  //       </ProtectedRoute>
  //     ),
  //   },
  {
    path: "*",
    element: <Navigate to='/' />,
  },
];

export default AppRoutes;
