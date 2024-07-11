import React from 'react';
import Navbar from '../Common/Navbar';
import Sidebar from '../Common/Sidebar';
import Footer from '../Common/Footer';
import '../../styles/manager.css';

const ManagerPanel = () => {
  const handleLogout = () => {
    // Add logout functionality
  };

  return (
    <div className="manager-container">
      <Navbar profileName="Manager" onLogout={handleLogout} />
      <div className="manager-content">
        <Sidebar role="manager" />
        <main className="main-content">
          <h2>Manager Dashboard</h2>
          <div className="dashboard-summary">
            {/* Add content or summary statistics for the dashboard */}
            <p>Welcome to the Manager Dashboard</p>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ManagerPanel;
