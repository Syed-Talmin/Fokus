import React, { useState } from "react";

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[var(--color-bg)] p-4 relative overflow-hidden">
      <div className="w-full max-w-6xl h-[600px] bg-white/50 backdrop-blur-lg shadow-2xl rounded-xl grid grid-cols-2 relative overflow-hidden">

        <div className="p-10 flex flex-col justify-center gap-4 z-10">
          <h2 className="text-3xl font-bold text-teal-800">Create Account</h2>
          <input type="text" placeholder="Name" className="p-3 rounded-lg bg-white outline-none" />
          <input type="email" placeholder="Email" className="p-3 rounded-lg bg-white outline-none" />
          <input type="password" placeholder="Password" className="p-3 rounded-lg bg-white outline-none" />
          <button className="bg-teal-700 text-white py-2 rounded-lg hover:bg-teal-800 transition">Sign Up</button>
          <p className="text-sm">
            Already have an account?{" "}
            <span
              className="text-teal-900 font-semibold cursor-pointer"
              onClick={() => setIsSignup(true)}
            >
              Log in
            </span>
          </p>
        </div>

        <div className="p-10 flex flex-col justify-center gap-4 z-10">
          <h2 className="text-3xl font-bold text-slate-800">Welcome Back</h2>
          <input type="email" placeholder="Email" className="p-3 rounded-lg bg-white outline-none" />
          <input type="password" placeholder="Password" className="p-3 rounded-lg bg-white outline-none" />
          <button className="bg-slate-800 text-white py-2 rounded-lg hover:bg-slate-900 transition">Login</button>
          <p className="text-sm">
            Don't have an account?{" "}
            <span
              className="text-slate-900 font-semibold cursor-pointer"
              onClick={() => setIsSignup(false)}
            >
              Sign up
            </span>
          </p>
        </div>

        <div
          className={`absolute z-10 top-0 h-full w-1/2 bg-white text-center p-10 flex flex-col justify-start items-center shadow-lg transition-all duration-700 ease-in-out ${
            isSignup ? "left-0" : "left-1/2"
          }`}
        >
          <img
            src="/NA01.webp"
            alt="Fokus Bottle"
            className="w-full mb-6 rounded-lg shadow-xl"
          />
          <h3 className="text-3xl font-semibold text-gray-800">
            {isSignup ? "Join us and start your journey!" : "Welcome Back, Fokus Fan!"}
          </h3>
          <p className="text-sm mt-2 text-gray-600">
            {isSignup
              ? "Already have an account? Click to login and boost your focus."
              : "Don't have an account yet? Sign up and experience the difference."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
