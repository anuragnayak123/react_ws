import React from 'react';
import './sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Navigation</h2>
      </div>
      <ul className="sidebar-menu">
        <li><a href="/">Dashboard</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
