import React from "react";

const Login = () => {
  return (
    <div className="text-white grid place-items-center h-screen">
      <div className="loginBox w-96 p-6 bg-neutral-800 flex flex-col gap-5 rounded-lg shadow-2xl">
        <span className="text-center text-xl">Login</span>

        
        <input
          type="email"
          placeholder="Enter Email"
          className="p-3 rounded-md px-4 border-transparent border focus:border-yellow-300"
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="p-3 rounded-md px-4 border-transparent border focus:border-yellow-300"
        />

        <button className="bg-yellow-600 p-2 rounded-md m-2">Login</button>

        <div className="text-center hover:underline cursor-pointer text-sm">
          Your don't have account ? Click here
        </div>
      </div>
    </div>
  );
};

export default Login;
