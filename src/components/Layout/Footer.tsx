import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent text-gray-700 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-sm text-white text-center md:text-left">
          Copyright &copy; {new Date().getFullYear()} My Company
        </div>
        <div className="flex items-center justify-center md:justify-end">
          <Link to="#" className="text-white hover:text-gray-600 mr-4">
            Privacy Policy
          </Link>
          <Link to="#" className="text-white hover:text-gray-600">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
