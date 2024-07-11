import React, { useState } from 'react';
import Navbar from '../Common/Navbar';
import Sidebar from '../Common/Sidebar';
import Footer from '../Common/Footer';
import '../../styles/AddProduct.css'; // Import the CSS file for AddProduct styling

const AddProduct = () => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle adding product
    console.log('Product data submitted:', productData);
    // Example fetch call to add a product
    fetch('/api/add-product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    })
      .then(response => response.json())
      .then(data => console.log('Product added:', data))
      .catch(error => console.error('Error adding product:', error));
  };

  return (
    <div className="add-product-page">
      <Navbar profileName="Manager" />
      <Sidebar role="manager" />
      <main className="add-product-form-container">
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Product Name"
            value={productData.name}
            onChange={(e) => setProductData({ ...productData, name: e.target.value })}
            required
          />
          <textarea
            placeholder="Product Description"
            value={productData.description}
            onChange={(e) => setProductData({ ...productData, description: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Price"
            value={productData.price}
            onChange={(e) => setProductData({ ...productData, price: e.target.value })}
            required
          />
          <button type="submit">Add Product</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default AddProduct;
