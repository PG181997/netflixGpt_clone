// import React from "react";

import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_large.jpg"
          alt="Netflix login background"
        />
      </div>
      <form className="w-3/12 my-36 mx-auto right-0 left-0 absolute p-12 bg-black text-white opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <>
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 bg-gray-800 w-full rounded-lg"
            />

            <input
              type="email"
              placeholder="E-Mail ID"
              className="p-4 my-4 bg-gray-800 w-full rounded-lg"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              className="p-4 my-4 bg-gray-800 w-full rounded-lg"
            />
          </>
        )}
        {isSignInForm && (
          <input
            type="text"
            placeholder="Email or phone number"
            className="p-4 my-4 bg-gray-800 w-full rounded-lg"
          />
        )}

        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 bg-gray-800 w-full rounded-lg"
        />
        {!isSignInForm && (
          <input
            type="password"
            placeholder="Re-Enter Password"
            className="p-4 my-4 bg-gray-800 w-full rounded-lg"
          />
        )}
        <button className="p-4 my-6 bg-red-600 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-white cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? SignUp now"
            : "Already a user? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
