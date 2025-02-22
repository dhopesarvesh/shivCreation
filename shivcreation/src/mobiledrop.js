// MobileDropdown.jsx component
import React from "react";
import './mobiledrop.css';

const MobileDropdown = ({ toggle }) => {
  return (
    <div className="mobile-sidebar">
      <button className="close-btn" onClick={toggle}>
        ×
      </button>
      <div className="mobile-nav-items">
        <a href="/home">Home</a>
        <a href="/shopall">Catalog</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
        <div className="mobile-icons">
          <i className="fa-solid fa-user"></i>
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
      </div>
    </div>
  );
};

export default MobileDropdown;