import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import bg from "../assets/bg.jpg";
import Navbar from "../components/Layout/Navbar";
import CountdownTimer from "../components/CountdownTimer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-home">
      <Navbar />
      <div className="flex flex-col items-center h-screen ">
        <div className="mx-auto my-8">
          <img src={bg} alt="Logo" className="h-32" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Management System Space (MS-SPACE)
        </h1>
        <p className="text-white text-xl mb-8">
          We're working hard to bring you the best Management System in Africa.
        </p>
        <form className="w-full max-w-sm">
          <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Enter your email"
              aria-label="Email"
            />
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
            >
              Notify Me
            </button>
          </div>
        </form>
        <CountdownTimer />
        <p className="text-white text-sm mt-8">
          Follow us on social media to stay up to date on our launch:
        </p>
        <div className="flex mt-4">
          <a href="#" className="text-gray-700 hover:text-gray-800 mr-4">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-white hover:text-[#4267B2]"
              size="2xl"
            />
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-800 mr-4">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-white hover:text-[#0077B5]"
              size="2xl"
            />
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-800">
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-white hover:text-[#1DA1F2]"
              size="2xl"
            />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
