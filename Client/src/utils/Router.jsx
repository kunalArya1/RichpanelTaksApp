import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../Components/Register";
import Login from "../Components/Login";
import FacebookLoginButton from "../Components/FacebookLoginButton";
import Home from "../Components/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Dasboard",
        element: <FacebookLoginButton />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);
