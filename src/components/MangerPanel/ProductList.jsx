import React, { useState, useEffect } from 'react';
import Navbar from '../Common/Navbar';
import Sidebar from '../Common/Sidebar';
import Footer from '../Common/Footer';
import { FaEdit, FaTrash } from 'react-icons/fa'; 
import '../../styles/product-list.css' // Import icons for edit and delete

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [editProductId, setEditProductId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editPrice, setEditPrice] = useState('');
  const [editDescription, setEditDescription] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5164/getproducts'); // API endpoint to fetch products
        const data = await response.json();
        setProducts(data.products); // Assuming response contains a products array
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleEditProduct = (product) => {
    setEditProductId(product.id);
    setEditName(product.name);
    setEditPrice(product.price);
    setEditDescription(product.description);
  };

  const handleUpdateProduct = async () => {
    try {
      await fetch(`http://localhost:5164/updateproduct/${editProductId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: editName,
          price: editPrice,
          description: editDescription,
        }),
      });
      alert('Product updated successfully!');
      setEditProductId(null);
      setEditName('');
      setEditPrice('');
      setEditDescription('');
      // Fetch products again to get updated data
      const response = await fetch('http://localhost:5164/getproducts');
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await fetch(`http://localhost:5164/deleteproduct/${productId}`, {
        method: 'DELETE',
      });
      alert('Product deleted successfully!');
      // Fetch products again to get updated data
      const response = await fetch('http://localhost:5164/getproducts');
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="product-list-page">
      <Navbar profileName="Manager" />
      <Sidebar role="manager" />
      <main className="main-content">
        <div className="product-list-container">
          <h2>Product List</h2>
          {editProductId && (
            <div className="edit-product-form">
              <h3>Edit Product</h3>
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                placeholder="Product Name"
              />
              <input
                type="number"
                value={editPrice}
                onChange={(e) => setEditPrice(e.target.value)}
                placeholder="Price"
              />
              <textarea
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                placeholder="Description"
              />
              <button onClick={handleUpdateProduct}>Update Product</button>
              <button onClick={() => setEditProductId(null)}>Cancel</button>
            </div>
          )}
          <table className="product-table">
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.description}</td>
                  <td>
                    <button onClick={() => handleEditProduct(product)}>
                      <FaEdit /> Edit
                    </button>
                    <button onClick={() => handleDeleteProduct(product.id)}>
                      <FaTrash /> Delete
                    </button>
                  </td>
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

export default ProductList;
