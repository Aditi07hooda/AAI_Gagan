import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Dropdown({ items, closeMobileMenu }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div
      className='dropdown-container'
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
        {items.map((item, index) => (
          <li key={index}>
            <Link
              className='dropdown-link'
              to={item.path}
              onClick={closeMobileMenu}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;
