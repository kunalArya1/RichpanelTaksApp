import React from "react";
import Register from "./Components/Register";
import Login from "./Components/Login";
import { Link, Outlet } from "react-router-dom";
const App = () => {
  return (
    <>
      <div>
        <nav className=" h-[14vh] w-screen bg-slate-700 flex items-center justify-between px-20 text-white text-xl font-bold">
          <div>
            <Link to="/home">
              <h1>Logo</h1>
            </Link>
          </div>
          <div className=" flex gap-8 cursor-pointer">
            <Link to="/Register">
              <p>Register</p>
            </Link>
            <Link to="/Login">
              <p>LogIn</p>
            </Link>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default App;
