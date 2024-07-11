import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SupplierPanel from './components/SupplierPanel/SupplierPanel';
import CreateProfile from './components/SupplierPanel/CreateProfile';
import CheckProductAvailability from './components/SupplierPanel/CheckProductAvailability';
import TrackShipment from './components/SupplierPanel/TrackShipment';
import PickupOrder from './components/SupplierPanel/PickupOrder';
import TransactionHistory from './components/SupplierPanel/TransactionHistory';
import ManagerPanel from './components/MangerPanel/ManagerPanel';
import AddProduct from './components/MangerPanel/AddProduct';
import OrderList from './components/MangerPanel/OrderList';
import TransactionHistoryManger from './components/MangerPanel/TransactionHistory';
import TrackShipmentManager from './components/MangerPanel/TrackShipment';
import PickupOrdermanager from './components/MangerPanel/PickupOrder';
import CreateProfileManager from './components/MangerPanel/CreateProfile';
import ProductList from './components/MangerPanel/ProductList';


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Supplier Routes */}
        <Route path="/supplier" element={<SupplierPanel />} />
        <Route path="/supplier/create-profile" element={<CreateProfile />} />
        <Route path="/supplier/check-product-availability" element={<CheckProductAvailability />} />
        <Route path="/supplier/pickup-order" element={<PickupOrder />} />
        <Route path="/supplier/track-shipment" element={<TrackShipment />} />
        <Route path="/supplier/transaction-history" element={<TransactionHistory />} />
        <Route path="/manager/productlist" element={<ProductList />} />
        
        {/* Manager Routes */}
        <Route path="/manager" element={<ManagerPanel />} />
        <Route path="/manager/create-profile" element={<CreateProfileManager />} />
        <Route path="/manager/add-product" element={<AddProduct />} />
        <Route path="/manager/order-list" element={<OrderList />} />
        <Route path="/manager/pickup-order" element={<PickupOrdermanager />} />
        <Route path="/manager/track-shipment" element={<TrackShipmentManager />} />
        <Route path="/manager/transaction-history" element={<TransactionHistoryManger />} />
        
        {/* User Routes
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<UserProfile />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
