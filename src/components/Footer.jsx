import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h1>Financio.</h1>
        </div>
        <div className="footer-column">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">For You</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>Email: info@financio.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Financio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
