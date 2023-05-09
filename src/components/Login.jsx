import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { logIn, googleSignIn } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="main min-h-screen flex justify-center items-center p-4 md:p-6 lg:p-8">
      <form
        onSubmit={handleSubmit}
        className="max-w-sm p-8 md:p-10 bg-gradient-to-b from blue-900/80 to blue-800/20 text-white backdrop-blur-lg border-solid border-white border-opacity-20 rounded-2xl shadow-black/70 shadow-2xl"
      >
        <h1 className="font-bold text-xl uppercase md:text-2xl mb-6">
          Login here 👇
        </h1>
        <p className="mb-6 text-[#fff]/60 text-sm text-opacity-50">
          Enter a valid email &amp; password in the fields below to get started.
        </p>

        <label className="relative text-[#fff]/70 focus-within:text-[#fff]/70 block mb-4 ">
          <svg
            className="transition pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
          </svg>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="form-input transition-colors duration-200 py-3 pr-3 md:py-4 md:pr-4 w-full bg-black/60 text-white focus:bg-black/70 focus:shadow-sm focus:outline-none leading-none placeholder:gray-400 appearance-none block pl-12 rounded-lg"
          />
        </label>

        <label className="relative text-[#fff]/70 focus-within:text-[#fff]/70 block mb-4">
          <svg
            className="transition pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <g fill="none">
              <path d="M0 0h24v24H0V0z" />
              <path d="M0 0h24v24H0V0z" opacity=".87" />
            </g>
            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
          </svg>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-input transition-colors duration-200 py-3 pr-3 md:py-4 md:pr-4 w-full bg-black/60 text-white focus:bg-black/70 focus:shadow-sm focus:outline-none leading-none placeholder:gray-400 appearance-none block pl-12 rounded-lg"
          />
        </label>

        <button className="bg-blue-600 hover:bg-blue-700 w-full p-1 md:p-2 rounded-md font-bold text-lg transition-colors duration-500">
          Login
        </button>

        <h1 className="text-base underline underline-offset-2 text-center m-2">
          OR
        </h1>

        <GoogleButton className="mx-auto" onClick={handleGoogleSignIn} />

        <p className="mt-8 text-center text-xs text-white">
          Don't have account{" "}
          <Link className="underline decoration-2 decoration-sky-500" to="/">
            Signup
          </Link>{" "}
          here
        </p>
      </form>
    </div>
  );
};

export default Login;
