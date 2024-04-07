import React from 'react';
import './Footer.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Make sure to import the Bootstrap Icons CSS

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="contact-info">
          <h5>Contact Us</h5>
          <p><i className="bi bi-envelope-fill"></i> Email: info@example.com</p>
          <p><i className="bi bi-telephone-fill"></i> Phone: +123 456 7890</p>
        </div>
        <div className="social-media">
          <h5>Follow Us</h5>
          <a href="https://www.facebook.com" className="social-link">
            <i className="bi bi-facebook"></i> Facebook
          </a>
          <a href="https://www.twitter.com" className="social-link">
            <i className="bi bi-twitter"></i> Twitter
          </a>
          <a href="https://www.instagram.com" className="social-link">
            <i className="bi bi-instagram"></i> Instagram
          </a>
        </div>
        <div className="footer-logo">
          <h5><i className="bi bi-bootstrap-fill"></i> Your Logo Here</h5>
          {/* If you have a logo image, you can include it like this:
          <img src="path-to-your-logo.png" alt="Your Logo" /> */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
