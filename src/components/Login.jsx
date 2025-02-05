// import React from "react";

import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handelButtonClick = () => {
    const message = checkValidData(
      email.current.value,
      password.current.value,
      name?.current?.value
    );
    console.log("Meassage", message);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      //signup
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://img.tapimg.net/market/images/1676c2f450fac4baeea04affacca65ae.png",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //signin
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log("user in signIn: ", user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 my-36 mx-auto right-0 left-0 absolute p-12 bg-black text-white opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <>
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 bg-gray-800 w-full rounded-lg"
            />

            <input
              ref={email}
              type="email"
              placeholder="E-Mail ID"
              className="p-4 my-4 bg-gray-800 w-full rounded-lg"
            />
          </>
        )}
        {isSignInForm && (
          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="p-4 my-4 bg-gray-800 w-full rounded-lg"
          />
        )}

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 bg-gray-800 w-full rounded-lg"
        />

        <p className="text-red-600 font-bold">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-600 w-full rounded-lg"
          onClick={handelButtonClick}
        >
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
