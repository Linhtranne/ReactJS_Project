import React, { useState } from 'react';
import '../assets/css/Sidebar.css';

const SidebarMenu: React.FC = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuToggle = () => {
    console.log('Menu toggled');
    setMenuActive(!menuActive);
  };

  return (
    <div className={menuActive ? 'menu-active' : ''}>
      <nav id="slide-menu">
        <ul>
          <li>Home</li>
          <li>Dashboard</li>
          <li>Profile</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </nav>
      <div id="content">
        <div className="menu-trigger" onClick={handleMenuToggle}></div>
      </div>
    </div>
  );
};

export default SidebarMenu;
