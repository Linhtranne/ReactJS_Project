import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import '../../assets/css/admin.css';

const Admin: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const modeSwitch = document.querySelector('.mode-switch');
    modeSwitch?.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      modeSwitch.classList.toggle('active');
    });

    const listView = document.querySelector('.list-view');
    const gridView = document.querySelector('.grid-view');
    const projectsList = document.querySelector('.project-boxes');

    listView?.addEventListener('click', () => {
      gridView?.classList.remove('active');
      listView?.classList.add('active');
      projectsList?.classList.remove('jsGridView');
      projectsList?.classList.add('jsListView');
    });

    gridView?.addEventListener('click', () => {
      gridView?.classList.add('active');
      listView?.classList.remove('active');
      projectsList?.classList.remove('jsListView');
      projectsList?.classList.add('jsGridView');
    });

    const messagesBtn = document.querySelector('.messages-btn');
    const messagesSection = document.querySelector('.messages-section');
    messagesBtn?.addEventListener('click', () => {
      messagesSection?.classList.add('show');
    });

    const messagesClose = document.querySelector('.messages-close');
    messagesClose?.addEventListener('click', () => {
      messagesSection?.classList.remove('show');
    });

    return () => {
      modeSwitch?.removeEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        modeSwitch.classList.toggle('active');
      });

      listView?.removeEventListener('click', () => {
        gridView?.classList.remove('active');
        listView?.classList.add('active');
        projectsList?.classList.remove('jsGridView');
        projectsList?.classList.add('jsListView');
      });

      gridView?.removeEventListener('click', () => {
        gridView?.classList.add('active');
        listView?.classList.remove('active');
        projectsList?.classList.remove('jsListView');
        projectsList?.classList.add('jsGridView');
      });

      messagesBtn?.removeEventListener('click', () => {
        messagesSection?.classList.add('show');
      });

      messagesClose?.removeEventListener('click', () => {
        messagesSection?.classList.remove('show');
      });
    };
  }, []);

  return (
    <Router>
      <div className="app-container">
        <div className="app-header">
          <div className="app-header-left">
            <span className="app-icon"></span>
            <p className="app-name">DASHBOARD</p>
            <div className="search-wrapper">
              <input className="search-input" type="text" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="feather feather-search"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="M21 21l-4.35-4.35"></path>
              </svg>
            </div>
          </div>
          <div className="app-header-right">
            <button className="mode-switch" title="Switch Theme">
              <svg
                className="moon"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
              </svg>
            </button>
            <button className="add-btn" title="Add New Project" onClick={() => setIsModalOpen(true)}>
              <svg
                className="btn-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
            <button className="notification-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-bell"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </button>
            <button className="profile-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 19 19"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
              <span>ADMIN</span>
            </button>
          </div>
          <button className="messages-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-message-circle"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </button>
        </div>
        <div className="app-content">
          <div className="app-sidebar">
            <Link to="/" className="app-sidebar-link active">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-home"
              >
                <path d="M3 9l9-7 9 7 0 11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </Link>
            <Link to="/product-management" className="app-sidebar-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-pie-chart"
              >
                <path d="M21.21 15.89A10 10 0 118 2.83" />
                <path d="M22 12A10 10 0 0012 2v10z" />
              </svg>
            </Link>
            <Link to="/user-management" className="app-sidebar-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-users"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </Link>
            <Link to="/settings" className="app-sidebar-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-settings"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.9 1.9 0 0 0 .4 2.1l.2.2a2 2 0 0 1-2.8 2.8l-.2-.2a1.9 1.9 0 0 0-2.1-.4 1.9 1.9 0 0 0-1.1 1.7v.3a2 2 0 0 1-4 0v-.3a1.9 1.9 0 0 0-1.1-1.7 1.9 1.9 0 0 0-2.1.4l-.2.2a2 2 0 0 1-2.8-2.8l.2-.2a1.9 1.9 0 0 0 .4-2.1 1.9 1.9 0 0 0-1.7-1.1h-.3a2 2 0 0 1 0-4h.3a1.9 1.9 0 0 0 1.7-1.1 1.9 1.9 0 0 0-.4-2.1l-.2-.2a2 2 0 1 1 2.8-2.8l.2.2a1.9 1.9 0 0 0 2.1.4h.2a1.9 1.9 0 0 0 1.1-1.7V5a2 2 0 0 1 4 0v.3a1.9 1.9 0 0 0 1.1 1.7 1.9 1.9 0 0 0 2.1-.4l.2-.2a2 2 0 0 1 2.8 2.8l-.2.2a1.9 1.9 0 0 0-.4 2.1v.2a1.9 1.9 0 0 0 1.7 1.1h.3a2 2 0 0 1 0 4h-.3a1.9 1.9 0 0 0-1.7 1.1z" />
              </svg>
            </Link>
          </div>
          <div className="app-main">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/product-management" component={ProductManagementPage} />
              <Route path="/user-management" component={UserManagementPage} />
              <Route path="/settings" component={SettingsPage} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

const HomePage: React.FC = () => (
  <div>
    <h1>Home</h1>
    <p>This is the home page.</p>
  </div>
);

const ProductManagementPage: React.FC = () => (
  <div>
    <h1>Quản lí sản phẩm</h1>
    <p>This is the product management page.</p>
  </div>
);

const UserManagementPage: React.FC = () => (
  <div>
    <h1>Quản lí người dùng</h1>
    <p>This is the user management page.</p>
  </div>
);

const SettingsPage: React.FC = () => (
  <div>
    <h1>Cài Đặt</h1>
    <p>This is the settings page.</p>
  </div>
);

export default Admin;
