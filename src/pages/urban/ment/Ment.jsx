import React from 'react';
import './Ment.css';
import Blue from './uploads/Blue.png';
import Black from './uploads/Black.png';
import Socks from './uploads/Socks.png';

const Ment = () => {
  return (
    <div className="ment-for-you">
      <div className="ment-category-banner">
        <h2>Category</h2>
        <h1>Urban</h1>
        <p>Ment for you</p>
      </div>
      <div className="ment-product-grid">
        <div className="ment-product-item ment-large">
          <div className="ment-product-image">
            <img src={Blue} alt="Indica And Sativa Coat" />
            <button className="ment-wishlist-button">❤</button>
          </div>
          <div className="ment-product-info">
            <h3>Indica And Sativa Coat</h3>
            <p>$229.99</p>
          </div>
        </div>
        <div className="ment-product-column">
          <div className="ment-product-item ment-small">
            <div className="ment-product-image">
              <img src={Black} alt="Cana Leaf Adult's Coat" />
              <button className="ment-wishlist-button">❤</button>
            </div>
            <div className="ment-product-info">
              <h3>Cana Leaf Adult's Coat</h3>
              <p>$239.99</p>
            </div>
          </div>
          <div className="ment-product-item ment-small">
            <div className="ment-product-image">
              <img src={Socks} alt="Socks Indica And Sativa All Over Crew" />
              <button className="ment-wishlist-button">❤</button>
            </div>
            <div className="ment-product-info">
              <h3>Socks Indica And Sativa All Over Crew</h3>
              <p>$29.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ment;