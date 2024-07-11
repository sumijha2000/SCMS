import React, { useState, useEffect } from 'react';
import Navbar from '../Common/Navbar';
import Sidebar from '../Common/Sidebar';
import Footer from '../Common/Footer';
import '../../styles/OrderList.css'; // Import the CSS file for OrderList styling

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from API
    fetch('/api/orders')
      .then(response => response.json())
      .then(data => setOrders(data))
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  return (
    <div className="order-list-page">
      <Navbar profileName="Manager" />
      <Sidebar role="manager" />
      <main className="order-list-main-content">
        <div className="order-list-container">
          <h2>Order List</h2>
          <table className="order-list-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Product</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.product}</td>
                    <td>{order.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">No orders available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderList;
