import React, { useState } from 'react';
import Navbar from '../Common/Navbar';
import Sidebar from '../Common/Sidebar';
import Footer from '../Common/Footer';
import '../../styles/trackShipmentPage.css'

const TrackShipment = () => {
  const [shipmentId, setShipmentId] = useState('');
  const [status, setStatus] = useState('');

  const handleUpdateStatus = async (e) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:5164/updatestatus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ shipmentId, status }),
      });
      alert('Shipment status updated successfully!');
    } catch (error) {
      console.error('Error updating shipment status:', error);
    }
  };

  return (
    <div className="track-shipment-page">
      <Navbar profileName="Supplier" />
      <Sidebar role="supplier" />
      <main className="track-shipment-main-content">
        <div className="track-shipment-container">
          <h2 className="track-shipment-title">Track Shipment</h2>
          <form onSubmit={handleUpdateStatus} className="track-shipment-form">
            <input
              type="text"
              placeholder="Enter Shipment ID"
              value={shipmentId}
              onChange={(e) => setShipmentId(e.target.value)}
              required
              className="track-shipment-input"
            />
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
              className="track-shipment-select"
            >
              <option value="">Select Status</option>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
            </select>
            <button type="submit" className="track-shipment-button">Update Status</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrackShipment;
