import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import '../../styles/navbar.css';

const Navbar = ({ profileName, onLogout }) => {
  return (
    <nav className="navbar">
      <h1>User Panel</h1>
      <div className="profile">
        <FaUserCircle className="profile-icon" />
        <span className="profile-text">{profileName}</span>
        <div className="dropdown">
          <a href="/profile">Profile</a>
          <a href="/settings">Settings</a>
          <a href="/logout" onClick={onLogout}>Logout</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
