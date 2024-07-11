import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';
import { UserRoleProvider } from './context/UserRoleContext';

// Create a root for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<UserRoleProvider>
  <App/>
</UserRoleProvider>
);
