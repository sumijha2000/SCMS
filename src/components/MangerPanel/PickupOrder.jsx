import React, { useState } from 'react';
import Navbar from '../Common/Navbar';
import Sidebar from '../Common/Sidebar';
import Footer from '../Common/Footer';
import '../../styles/PickupOrdermanager.css'; // Import the CSS file for PickupOrdermanager styling

const PickupOrdermanager = () => {
  const [orderId, setOrderId] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle order pickup
    console.log(`Order ID: ${orderId}, Status: ${status}`);
    // Example fetch call to update status
    fetch('/api/pickup-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ orderId, status }),
    })
      .then(response => response.json())
      .then(data => console.log('Order status updated:', data))
      .catch(error => console.error('Error updating order status:', error));
  };

  return (
    <div className="pickup-order-page">
      <Navbar profileName="Manager" />
      <Sidebar role="manager" />
      <main className="pickup-order-container">
        <h2>Pickup Order</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Order ID"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
          />
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">Select Status</option>
            <option value="picked-up">Picked Up</option>
            <option value="not-available">Not Available</option>
          </select>
          <button type="submit">Update Status</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default PickupOrdermanager;
