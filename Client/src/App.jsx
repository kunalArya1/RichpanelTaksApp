import React from "react";
import Register from "./Components/Register";
import Login from "./Components/Login";
import { Link } from "react-router-dom";
const App = () => {
  return (
    <>
      <div>
        <nav className=" h-[14vh] w-screen bg-slate-700 flex items-center justify-between px-20 text-white text-xl font-bold">
          <div>
            <h1>Logo</h1>
          </div>
          <div className=" flex gap-8 cursor-pointer">
            <p>Register</p>
            <p>LogIn</p>
          </div>
        </nav>
      </div>
      <Register />
      <Login />
    </>
  );
};

export default App;
