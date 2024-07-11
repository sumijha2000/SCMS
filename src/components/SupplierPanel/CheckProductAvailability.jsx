import React, { useState, useEffect } from 'react';
import Navbar from '../Common/Navbar';
import Sidebar from '../Common/Sidebar';
import Footer from '../Common/Footer';
import '../../styles/checkProductAvailabilityPage.css';

const CheckProductAvailability = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5164/getproductavailability'); // Example API endpoint
        const data = await response.json();
        setProducts(data.products); // Adjust based on the actual structure of the response
      } catch (error) {
        console.error('Error fetching product availability:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="check-product-availability-page">
      <Navbar profileName="Supplier" />
      <Sidebar role="supplier" />
      <main className="main-content">
        <div className="check-product-availability-container">
          <h2>Check Product Availability</h2>
          <table className="product-table">
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Available Quantity</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.availableQuantity}</td>
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

export default CheckProductAvailability;
