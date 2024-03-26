import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import MenuItems from './MenuItems';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          {/* Remove EPIC logo */}
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={`nav-menu ${click ? 'active' : ''}`}>
          <li className='nav-item-home'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <div
              className='nav-links cursor-pointer relative'
              onMouseEnter={() => handleDropdown('about')}
              onMouseLeave={() => handleDropdown(null)}
            >
              About <i className='fas fa-caret-down' />
              {activeDropdown === 'about' && <Dropdown items={MenuItems.about} />}
            </div>
          </li>
          <li className='nav-item'>
            <div
              className='nav-links cursor-pointer relative'
              onMouseEnter={() => handleDropdown('technicalInfo')}
              onMouseLeave={() => handleDropdown(null)}
            >
              Technical Information <i className='fas fa-caret-down' />
              {activeDropdown === 'technicalInfo' && <Dropdown items={MenuItems.technicalInfo} />}
            </div>
          </li>
          <li className='nav-item'>
            <div
              className='nav-links cursor-pointer relative'
              onMouseEnter={() => handleDropdown('dataAndResearch')}
              onMouseLeave={() => handleDropdown(null)}
            >
              Data & Research <i className='fas fa-caret-down' />
              {activeDropdown === 'dataAndResearch' && <Dropdown items={MenuItems.dataAndResearch} />}
            </div>
          </li>
          <li className='nav-item'>
            <div
              className='nav-links cursor-pointer relative'
              onMouseEnter={() => handleDropdown('documents')}
              onMouseLeave={() => handleDropdown(null)}
            >
              Documents <i className='fas fa-caret-down' />
              {activeDropdown === 'documents' && <Dropdown items={MenuItems.documents} />}
            </div>
          </li>
          <li className='nav-item'>
            <div
              className='nav-links cursor-pointer relative'
              onMouseEnter={() => handleDropdown('resources')}
              onMouseLeave={() => handleDropdown(null)}
            >
              Resources <i className='fas fa-caret-down' />
              {activeDropdown === 'resources' && <Dropdown items={MenuItems.resources} />}
            </div>
          </li>
          <li className='nav-item'>
            <div
              className='nav-links cursor-pointer relative'
              onMouseEnter={() => handleDropdown('contactUs')}
              onMouseLeave={() => handleDropdown(null)}
            >
              Contact Us <i className='fas fa-caret-down' />
              {activeDropdown === 'contactUs' && <Dropdown items={MenuItems.contactUs} />}
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
