import React from 'react';
import logo from '../assets/trustbank.svg'; // Adjust the path to your logo file
import './LoanCalculator.css'; 

function Logo() {
  return (
    <div className="logo-container">
      <img src={logo} alt="Logo" className="logo" />
    </div>
  );
}

export default Logo;
