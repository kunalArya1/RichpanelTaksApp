import React, { useState } from "react";
import axios from "axios";
const App = () => {
  const [name, setname] = useState(null);
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);

  const RegisterSubmit = async () => {
    const respone = await axios.post("http://localhost:3000/user/register", {
      name,
      email,
      password,
    });
    console.log(respone);
  };
  return (
    <>
      <div className=" h-screen w-screen bg-slate-300 p-20">
        <div className=" h-[50%] w-[40%] bg-gray-400 text-center p-5 m-auto my-[9rem]">
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
            onChange={(e) => setname(e.target.value)}
            className=" w-[45%] p-5 outline-none rounded-lg"
            type="text"
            name=""
            id=""
            placeholder="Name"
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
            onClick={RegisterSubmit}
            className=" w-[45%] p-5 bg-green-500 rounded-lg"
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
