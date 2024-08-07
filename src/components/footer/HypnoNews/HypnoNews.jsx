import React from 'react';
import './HypnoNews.css';
import Arrows from './uploads/Arrow.png'

const HypnoNews = () => {
  return (
    <div className="hypno-news">
      <div className="left-section">
        <h2>HypnoNews</h2>
        <h3>Check out all the trends that <span>suit you.</span></h3>
        <button className="arrow-button">
          <img src={Arrows} />
        </button>
      </div>
      <div className="right-section">
        <p>Sign-up for exclusive discounts, crazy events and more.</p>
        <form className="subscribe-form">
          <input type="email" placeholder="Your email address" required />
          <button type="submit">Subscribe Now</button>
        </form>
      </div>
    </div>
  );
};

export default HypnoNews;
