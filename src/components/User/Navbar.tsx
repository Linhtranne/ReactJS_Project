import React, { useState, useEffect } from 'react';
import '../assets/css/Navbar.css';

const Navbar: React.FC = () => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);

  const handleDropdownClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const target = document.querySelector(`#${event.currentTarget.dataset.dropdown}`);
    if (target) {
      if (target.classList.contains('show')) {
        target.classList.remove('show');
        setDropdownIsOpen(false);
      } else {
        target.classList.add('show');
        setDropdownIsOpen(true);
      }
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleBodyClick = (event: MouseEvent) => {
    if (dropdownIsOpen) {
      document.querySelectorAll('.navbar .dropdown-toggler').forEach((dropdownButton) => {
        const dropdown = document.querySelector(`#${dropdownButton.dataset.dropdown}`);
        if (dropdown && !dropdown.contains(event.target as Node) && dropdownButton !== event.target) {
          dropdown.classList.remove('show');
        }
      });
      setDropdownIsOpen(false);
    }
  };

  const handleNavbarToggle = () => {
    setNavbarIsOpen(!navbarIsOpen);
  };

  useEffect(() => {
    window.addEventListener('mouseup', handleBodyClick);
    return () => {
      window.removeEventListener('mouseup', handleBodyClick);
    };
  }, [dropdownIsOpen, handleBodyClick]);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-header">
          <button className="navbar-toggler" onClick={handleNavbarToggle}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <a href="#">
            <h4>Your<span>Logo</span></h4>
          </a>
        </div>

        <div className={`navbar-menu ${navbarIsOpen ? 'active' : ''}`} id="open-navbar1">
          <ul className="navbar-nav">
            <li className="active"><a href="#">Home</a></li>
            <li className="navbar-dropdown">
              <a href="#" className="dropdown-toggler" data-dropdown="my-dropdown-id" onClick={handleDropdownClick}>
                Categories <i className="fa fa-angle-down"></i>
              </a>
              <ul className="dropdown" id="my-dropdown-id">
                <li><a href="#">Category 1</a></li>
                <li className="separator"></li>
                <li><a href="#">Category 2</a></li>
                <li className="separator"></li>
                <li><a href="#">Category 3</a></li>
              </ul>
            </li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Signin</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
