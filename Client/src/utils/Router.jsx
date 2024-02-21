import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../Components/Register";
import Login from "../Components/Login";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
]);
