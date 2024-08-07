import React from 'react';
import './Suggestions.css';
import Boxer from "./uploads/Boxer.png"
import Indica from "./uploads/Indica.png"
import Socks from "./uploads/Socks.png"

const Suggestions = () => {
  const products = [
    {
      name: "Socks Indica And Sativa All Over Crew",
      price: "$29.99",
      image: Socks, // Update paths to your images
    },
    {
      name: "Socks Indica And Sativa All Over Crew",
      price: "$29.99",
      image: Boxer, // Update paths to your images
    },
    {
      name: "Cana Leaf Adult's Boxer Briefs",
      price: "$39.99",
      image: Indica, // Update paths to your images
    },
  ];

  return (
    <div className="product-suggestions">
      <h2>You might also like</h2>
      <div className="product-list">
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
    </div>
  );
};

export default Suggestions;
