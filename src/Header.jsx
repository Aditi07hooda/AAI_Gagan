// Header.jsx
import React from "react";
import logo from "./assets/logo.png";

const Header = () => {
  return (
    <header className="bg-white p-4 flex justify-evenly">
      <div className="flex items-center">
        {/* Left Component with Image */}
        <div className="w-72 md:w-56 lg:w-2/12 md:text-center">
          <img src={logo} alt="logo" />
        </div>

        {/* Center Component with Text */}
        <div className="flex-grow text-center hidden lg:justify-evenly lg:flex cursor-default">
          <div className="">
            <h4 className="font-bold text-xl text-gray-700">
              भारतीय विमानपत्तन प्राधिकरण
            </h4>
            <h2 className="font-bold text-3xl text-black">
              Airports Authority of India
            </h2>
            <h2 className="font-medium text-lg text-gray-600 mt-2">
              GAGAN (GPS-aided GEO augmented navigation)
            </h2>
          </div>
        </div>

        {/* Right Component with Social Media Links */}
        <div className="hidden lg:flex lg:flex-col">
          <div className="flex justify-between space-x-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube text-2xl"></i>
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
          </div>
          <p className="text-fa-fa-arrows-left-right-to-line cursor-default">connect to us</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
