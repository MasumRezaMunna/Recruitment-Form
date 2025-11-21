import React from "react";
import { Link } from "react-router-dom";

export default function HomePage({ onStart }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center pt-20 px-4 ">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 space-y-6 max-w-4xl">
        <p className="text-gray-400 uppercase tracking-widest text-sm">
          DIUSEC - Development Wing Recruits -
        </p>

        <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 pb-2">
          HR / Developer
        </h1>

        

        <div className="pt-8">
          <button
            onClick={onStart}
            className="group relative px-8 py-4 text-lg font-bold text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.8)] transition-all duration-300 transform hover:scale-105"
          >
            <Link to="register">Join the Journey</Link>
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
