import React, { useState } from "react";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";
const App = () => {
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);

  const navigate = useNavigate();

  const loginSubmit = async () => {
    const respone = await axios.post("http://localhost:3000/user/login", {
      email,
      password,
    });
    console.log(respone);
    if (respone.data.statuscode === 200) {
      navigate("/Dasboard");
    } else {
      navigate("/Login");
    }
  };
  return (
    <>
      <div className="h-[86vh] overflow-x-hidden bg-slate-300 p-20">
        <div className=" h-[80%] w-[40%] bg-gray-400 text-center p-5 m-auto ">
          <input
            onChange={(e) => setemail(e.target.value)}
            className=" w-[45%] p-5 outline-none mt-10 rounded-lg"
            type="text"
            name=""
            id=""
            placeholder="Email"
          />
          <br />
          <br />
          <input
            onChange={(e) => setpassword(e.target.value)}
            className=" w-[45%] p-5 outline-none rounded-lg"
            type="text"
            name=""
            id=""
            placeholder="password"
          />
          <br />
          <br />
          <button
            onClick={loginSubmit}
            className=" w-[45%] p-5 bg-green-500 rounded-lg"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
