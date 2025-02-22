import React from 'react';
import "./footer.css"; // Make sure this file exists

const Footer = () => {
  return (
    <div className='footer'>
      <div className='fcontainer'>
        <div className='row'>
          <div className='footer-col'>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/shopall">Category</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className='footer-col'>
            <h4>Customer Services</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms and Conditions</a></li>
              <li><a href="#">Refund and Return Policy</a></li>
              <li><a href="#">Order and Tracking</a></li>
            </ul>
          </div>
          <div className='footer-col'>
            <h4>Social Media</h4>
            <div className='social-links'>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
              <a href="#"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
          <p> © 2025,  <a href="/home"> <b>Shiv's Creations</b></a> </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
