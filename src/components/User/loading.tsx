import React from 'react';
import '../assets/css/loading.css';

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <span className="loader-text">loading</span>
      <span className="load"></span>
    </div>
  );
};

export default Loader;
