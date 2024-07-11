import React from 'react';
import Navbar from '../Common/Navbar';
import Sidebar from '../Common/Sidebar';
import Footer from '../Common/Footer';
import '../../styles/supplier.css';

const SupplierPanel = () => {
  return (
    <div className="supplier-panel">
      <Navbar profileName="Supplier" />
      <Sidebar role="supplier" />
      <main className="main-content">
        <h2>Supplier Dashboard</h2>
        <p>Welcome to the Supplier Dashboard!</p>
        {/* Add additional content or widgets as needed */}
      </main>
      <Footer />
    </div>
  );
};

export default SupplierPanel;
