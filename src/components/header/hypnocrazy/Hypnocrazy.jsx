import React from 'react';
import './Hypnocrazy.css'; // Import the CSS file for styling
import Logo from './uploads/Logo.png'

const Hypnocrazy = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="HypnoCrazy" /> {/* Update src to your actual logo image */}
      </div>
      <nav className="navigation">
        <a href="#the-brand">The Brand</a>
        <a href="#boxers">Boxers</a>
        <a href="#socks">Socks</a>
        <a href="#hats">Hats</a>
        <a href="#loungewear">Loungewear</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="icons">
        <a href="#wishlist"><i className="fa fa-heart"></i></a>
        <a href="#account"><i className="fa fa-user"></i></a>
        <a href="#cart"><i className="fa fa-shopping-bag"></i></a>
      </div>
    </header>
  );
};

export default Hypnocrazy;
