import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-transparent p-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/ ">
          <h1 className="text-2xl font-bold text-white">MS-Space</h1>
        </Link>
        <div className="flex items-center">
          <Link
            to="/about"
            className="px-3 py-2 font-semibold text-white hover:text-[]"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="px-3 py-2 font-semibold text-white hover:text-[]"
          >
            Contact
          </Link>
          <button className="px-3 py-2 font-semibold text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline-blue active:bg-gray-800 active:text-white">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
