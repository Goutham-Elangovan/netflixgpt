import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const userLoggedInStatus = isSignIn ? "Sign in" : "Sign up";

  const handleUserLoggedInStatus = () => {
    setIsSignIn((prev) => !prev);
  };
  return (
    <div className="absolute w-full h-full bg-black">
      <Header />
      <div className="absolute mx-64 bg-gradient-to-l from-red-500 via-black to-red-500 p-[4px] ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web/NZ-en-20250324-TRIFECTA-perspective_e8d821a5-89b2-43ad-a0a1-8d35f95ac466_large.jpg"
          alt="bg-image"
          className=""
        />
      </div>
      {/* Login form */}
      <form className="absolute w-3/12 bg-black p-12 rounded-md right-0 left-0 my-96 mx-auto text-white z-10 opacity-85">
        <h1 className="font-bold text-3xl pb-4 mb-4">{userLoggedInStatus}</h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800 rounded-sm"
          />
        )}
        <input type="text" placeholder="Email" className="p-4 my-4 w-full bg-gray-800 rounded-sm" />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800 rounded-sm"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {userLoggedInStatus}
        </button>
        <p className="my-3 text-gray-500">
          {isSignIn ? "New to Netflix?" : "Already have an account?"}
          <span
            className="cursor-pointer text-white"
            onClick={handleUserLoggedInStatus}
          >
            {" "}
            {isSignIn ? "Sign up" : "Sign in"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
