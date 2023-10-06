import React from 'react';
import './Header.css';
import logo from './logo.png'; 


const Header = () => {
  return (
    <header className="header">
        <div className="header-left">
        </div>
        <div className="header-center">
            <h2>AUDIOMANT</h2>
        </div>
        <div className="header-right">
        <div className="circle-logo">
            <img src={logo} alt="Logo" />
            </div>
        </div>
    </header>
    );
}

export default Header;
