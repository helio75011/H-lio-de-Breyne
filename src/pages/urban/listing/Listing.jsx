import React from 'react';
import './Listing.css';
import Blue from './uploads/Blue.png'
import Boxer from './uploads/Boxer.png'
import Neon from './uploads/Neon.png'

const Listing = () => {
  const products = [
    {
      name: "Cana Leaf Adult's Boxer Briefs",
      price: "$39.99",
      image: Boxer, // Update paths to your images
    },
    {
      name: "Cana Neon Adult's Boxer Briefs",
      price: "$39.99",
      image: Neon, // Update paths to your images
    },
    {
      name: "Cana Burning 2 Adult's Boxer Briefs",
      price: "$39.99",
      image: Blue, // Update paths to your images
    },
  ];

  return (
    <div className="product-listing">
      <div className="product-categories">
        <span className="category active">ALL <span className="count">20</span></span>
        <span className="category">BOXERS <span className="count">8</span></span>
        <span className="category">SOCKS <span className="count">12</span></span>
      </div>
      <div className="product-filters">
        <span className="filter-icon">🔳</span>
        <span className="filter-icon">🔲</span>
        <span className="filter-icon">⬛</span>
        <span className="filter-icon">⬜</span>
        <span className="filter">FILTERS</span>
      </div>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-item" key={index}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <button className="wishlist-button">❤</button>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='load-more-parent'>
        <button className="load-more">Load More</button>
      </div>
    </div>
  );
};

export default Listing;
