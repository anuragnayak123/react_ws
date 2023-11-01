import React from 'react';
import './topbar.css';

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-content">
        <h1>My Website</h1>
        <ul className="nav-menu">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
