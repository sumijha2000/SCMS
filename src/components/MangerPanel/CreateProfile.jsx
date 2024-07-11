import React, { useState } from 'react';
import Navbar from '../Common/Navbar';
import Sidebar from '../Common/Sidebar';
import Footer from '../Common/Footer';
import '../../styles/CreateProfileManager.css';

const CreateProfileManager = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    address: '',
    password: '',
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add code to handle form submission, e.g., make an API call.
    alert('Profile created successfully!');
  };

  return (
    <div className="create-profile-manager-page">
      <Navbar profileName="Manager" />
      <Sidebar role="manager" />
      <main className="create-profile-form-container">
        <h2>Create Manager Profile</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={profile.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={profile.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={profile.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={profile.companyName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={profile.address}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={profile.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Create Profile</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default CreateProfileManager;
