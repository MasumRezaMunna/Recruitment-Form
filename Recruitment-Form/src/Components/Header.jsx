import React from "react";
import { Link } from "react-router-dom";

export default function Header({ onJoinClick }) {
  return (
    <header className="flex justify-between items-center p-6 border-b border-gray-800 bg-opacity-50 backdrop-blur-md fixed top-0 w-full z-50">
      <div className="text-2xl font-bold text-white">
        <Link to="/">DIUSEC - Development Wing</Link>
      </div>
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="text-gray-300 hover:text-white transition">
          Home
        </Link>
        <Link to="register" className="text-gray-300 hover:text-white transition">
          Register
        </Link>
      </div>
      <button
        onClick={onJoinClick}
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-lg transition shadow-lg shadow-purple-500/30"
      >
        <Link to="register">Join Now</Link>
      </button>
    </header>
  );
}
