import React, { useState, useEffect } from 'react';
import Navbar from '../Common/Navbar';
import Sidebar from '../Common/Sidebar';
import Footer from '../Common/Footer';
import '../../styles/transactionHistoryPage.css'; // Import the CSS file for TransactionHistory styling

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch('http://localhost:5164/gettransactions'); // Example API endpoint
        const data = await response.json();
        setTransactions(data.transactions); // Adjust based on the actual structure of the response
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="transaction-history-page">
      <Navbar profileName="User" />
      <Sidebar role="user" />
      <main className="transaction-history-main-content">
        <div className="transaction-history-container">
          <h2 className="transaction-history-title">Transaction History</h2>
          <table className="transaction-table">
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
                  <td>{transaction.amount}</td>
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

export default TransactionHistory;
