// src/components/AdminPage/AdminPage.js
import React from 'react';
import './AdminPage.css';

const AdminPage = () => {
  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>
      <div className="admin-options">
        <button onClick={() => alert('Manage Users')}>Manage Users</button>
        <button onClick={() => alert('Manage Industries')}>Manage Industries</button>
        <button onClick={() => alert('Schedule Visits')}>Schedule Visits</button>
        <button onClick={() => alert('Generate Reports')}>Generate Reports</button>
      </div>
    </div>
  );
};

export default AdminPage;
