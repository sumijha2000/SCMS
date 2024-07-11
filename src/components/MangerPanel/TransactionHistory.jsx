import React, { useState, useEffect } from 'react';
import Navbar from '../Common/Navbar';
import Sidebar from '../Common/Sidebar';
import Footer from '../Common/Footer';
import '../../styles/TransactionHistoryManager.css'; // Import the CSS file for TransactionHistoryManager styling

const TransactionHistoryManager = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch transactions from API
    fetch('/api/transaction-history', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => setTransactions(data))
      .catch(error => console.error('Error fetching transaction history:', error));
  }, []);

  return (
    <div className="transaction-history-manager-page">
      <Navbar profileName="Manager" />
      <Sidebar role="manager" />
      <main className="transaction-history-manager-main-content">
        <div className="transaction-history-manager-container">
          <h2>Transaction History</h2>
          <table className="transaction-history-manager-table">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.id}</td>
                  <td>{transaction.date}</td>
                  <td>${transaction.amount}</td>
                  <td>{transaction.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TransactionHistoryManager;
