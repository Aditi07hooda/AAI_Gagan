// Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white p-4">
      <div className="flex items-center">
        {/* Left Component with Image */}
        <div className="flex-shrink-0">
          <img
            src="client/src/assets/AAILogo.jpeg" 
            alt="Logo"
            className="h-12 w-12 object-cover rounded-full"
          />
        </div>

        {/* Center Component with Text */}
              <div className="flex-grow text-center">
                  <h4>aai in hindi</h4>
  <h2>Airports Authority of India</h2>
   <h2>GAGAN (GPS-aided GEO augmented navigation)</h2>
</div>

        {/* Right Component with Social Media Links */}
        <div className="flex-shrink-0 space-x-4">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook text-2xl"></i>
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube text-2xl"></i>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <p className="text-fa-fa-arrows-left-right-to-line">connect to us</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
