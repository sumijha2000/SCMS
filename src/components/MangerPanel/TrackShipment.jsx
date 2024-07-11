import React, { useState } from 'react';
import Navbar from '../Common/Navbar';
import Sidebar from '../Common/Sidebar';
import Footer from '../Common/Footer';
import '../../styles/TrackShipmentManager.css'; // Import the CSS file for TrackShipmentManager styling

const TrackShipmentManager = () => {
  const [shipmentId, setShipmentId] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle shipment tracking
    console.log(`Shipment ID: ${shipmentId}, Status: ${status}`);
    // Example fetch call to update status
    fetch('/api/track-shipment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ shipmentId, status }),
    })
      .then(response => response.json())
      .then(data => console.log('Shipment status updated:', data))
      .catch(error => console.error('Error updating shipment status:', error));
  };

  return (
    <div className="track-shipment-manager-page">
      <Navbar profileName="Manager" />
      <Sidebar role="manager" />
      <main className="track-shipment-manager-main-content">
        <div className="track-shipment-manager-container">
          <h2>Track Shipment</h2>
          <form onSubmit={handleSubmit} className="track-shipment-manager-form">
            <input
              type="text"
              placeholder="Shipment ID"
              value={shipmentId}
              onChange={(e) => setShipmentId(e.target.value)}
              className="track-shipment-manager-input"
            />
            <select value={status} onChange={(e) => setStatus(e.target.value)} className="track-shipment-manager-select">
              <option value="">Select Status</option>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
            </select>
            <button type="submit" className="track-shipment-manager-button">Update Status</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrackShipmentManager;
