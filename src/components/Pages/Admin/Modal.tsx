// src/components/CustomModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import '../../assets/css/admin.css';

Modal.setAppElement('#root');

const SetModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [viewMode, setViewMode] = useState('grid');

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const switchToListView = () => {
    setViewMode('list');
  };

  const switchToGridView = () => {
    setViewMode('grid');
  };

  return (
    <div className={`app-container ${darkMode ? 'dark' : ''}`}>
      <button onClick={openModal} className="open-modal-btn">Open Modal</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Custom Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Hello, I'm a modal!</h2>
        <button onClick={closeModal}>Close Modal</button>

        <div className="mode-switch" onClick={toggleDarkMode}>
          Toggle Dark Mode
        </div>
        
        <div className="view-switch">
          <button 
            className={`list-view ${viewMode === 'list' ? 'active' : ''}`} 
            onClick={switchToListView}
          >
            List View
          </button>
          <button 
            className={`grid-view ${viewMode === 'grid' ? 'active' : ''}`} 
            onClick={switchToGridView}
          >
            Grid View
          </button>
        </div>

        <div className={`project-boxes ${viewMode === 'list' ? 'jsListView' : 'jsGridView'}`}>
          {/* Your project boxes here */}
        </div>

        <div className="messages-btn" onClick={() => document.querySelector('.messages-section').classList.add('show')}>
          Open Messages
        </div>

        <div className="messages-section">
          <button className="messages-close" onClick={() => document.querySelector('.messages-section').classList.remove('show')}>
            Close Messages
          </button>

        </div>
      </Modal>
    </div>
  );
};

export default SetModal;
