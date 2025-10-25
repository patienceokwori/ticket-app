import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
        🎟️ Welcome to TicketApp
      </h1>

      <p className="text-gray-700 text-lg max-w-md mb-8">
        Manage your tickets easily — create, track, and resolve issues in one
        place. Built with React, Firebase, and Tailwind.
      </p>

      <div className="flex flex-col md:flex-row gap-4">
        <Link
          to="/login"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Home;
