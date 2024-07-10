import React from 'react';
import '../assets/css/index.css';
import Card from './card';
import Slider from './index2';
import Loader from './loading';
import AnimatedMenu from './Menu';
import Navbar from './Navbar';
import SidebarMenu from './Sidebar';

const UserPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Card />
        <Slider />
        <Loader />
        <AnimatedMenu />
        <SidebarMenu />
      </div>
    </div>
  );
};

export default UserPage;
