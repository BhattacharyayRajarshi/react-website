//jshint esversion:6

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            ABCbanks <i className='fab fa-typo3' />
          </Link>
          <div classNamme='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul>
            <li className='nav-item'>
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Features <i className='fab fa-typo3' />
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                How it Works <i className='fab fa-typo3' />
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/" className="nav-links-mobile" onClick={closeMobileMenu}>
                Our Team <i className='fab fa-typo3' />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
