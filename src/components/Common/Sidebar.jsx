import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sidebar.css';
// Import the CSS file for Sidebar styling

// Importing React Icons
import { FaHome, FaUserPlus, FaBox, FaList, FaShippingFast, FaHistory, FaCheck, FaCogs, FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = ({ role }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      <button className="menu-button" onClick={handleSidebarToggle}>
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div className="sidebar-content">
        <Link to={role === 'manager' ? '/manager' : '/supplier'}>
          <h3 className={`sidebar-heading ${isSidebarOpen ? 'open' : 'closed'}`}>{role === 'manager' ? 'Manager Panel' : 'Supplier Panel'}</h3>
        </Link>
        <ul className="menu">
          {role === 'manager' ? (
            <>
              <li>
                <Link to="/manager" className="menu-item">
                  <FaHome className="icon" />
                  {isSidebarOpen && <span className="menu-text">Home</span>}
                </Link>
              </li>
              <li>
                <Link to="/manager/create-profile" className="menu-item">
                  <FaUserPlus className="icon" />
                  {isSidebarOpen && <span className="menu-text">Create Profile</span>}
                </Link>
              </li>
              <li>
                <Link to="/manager/add-product" className="menu-item">
                  <FaBox className="icon" />
                  {isSidebarOpen && <span className="menu-text">Add Product</span>}
                </Link>
              </li>
              <li>
                <Link to="/manager/order-list" className="menu-item">
                  <FaList className="icon" />
                  {isSidebarOpen && <span className="menu-text">Order List</span>}
                </Link>
              </li>
              <li>
                <Link to="/manager/pickup-order" className="menu-item">
                  <FaShippingFast className="icon" />
                  {isSidebarOpen && <span className="menu-text">Pickup Order</span>}
                </Link>
              </li>
              <li>
                <Link to="/manager/track-shipment" className="menu-item">
                  <FaCheck className="icon" />
                  {isSidebarOpen && <span className="menu-text">Track Shipment</span>}
                </Link>
              </li>
              <li>
                <Link to="/manager/transaction-history" className="menu-item">
                  <FaHistory className="icon" />
                  {isSidebarOpen && <span className="menu-text">Transaction History</span>}
                </Link>
              </li>
              <li>
                <Link to="/manager/productlist" className="menu-item">
                <FaBox className="icon" />
                  {isSidebarOpen && <span className="menu-text">Product List</span>}
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/supplier" className="menu-item">
                  <FaHome className="icon" />
                  {isSidebarOpen && <span className="menu-text">Home</span>}
                </Link>
              </li>
              <li>
                <Link to="/supplier/create-profile" className="menu-item">
                  <FaUserPlus className="icon" />
                  {isSidebarOpen && <span className="menu-text">Create Profile</span>}
                </Link>
              </li>
              <li>
                <Link to="/supplier/check-product-availability" className="menu-item">
                  <FaCogs className="icon" />
                  {isSidebarOpen && <span className="menu-text">Check Product Availability</span>}
                </Link>
              </li>
              <li>
                <Link to="/supplier/pickup-order" className="menu-item">
                  <FaShippingFast className="icon" />
                  {isSidebarOpen && <span className="menu-text">Pickup Order</span>}
                </Link>
              </li>
              <li>
                <Link to="/supplier/track-shipment" className="menu-item">
                  <FaCheck className="icon" />
                  {isSidebarOpen && <span className="menu-text">Track Shipment</span>}
                </Link>
              </li>
              <li>
                <Link to="/supplier/transaction-history" className="menu-item">
                  <FaHistory className="icon" />
                  {isSidebarOpen && <span className="menu-text">Transaction History</span>}
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
