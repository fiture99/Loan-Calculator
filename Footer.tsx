// src/components/Footer.js

// import React from 'react';
import '../components/style.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h5>Follow Us</h5>
            <ul className="social-links">
              <li><a href="" className="social-icon"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="" className="social-icon"><i className="fab fa-twitter"></i></a></li>
              <li><a href="" className="social-icon"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href="" className="social-icon"><i className="fab fa-instagram"></i></a></li>
            </ul>
            <p className="mt-4">&copy; {new Date().getFullYear()} Taibatou Services. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
