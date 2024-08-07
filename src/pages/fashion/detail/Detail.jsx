import React from 'react';
import './Detail.css';
import Manequin from "./uploads/Manequin.png"
import Sneackers from "./uploads/Sneackers.png"
import Socks from "./uploads/Socks.png"

const Detail = () => {
  return (
    <div className="product-page">
      <div className="product-images">
        <div className="main-image">
          <img src={Manequin} alt="Socks Indica And Sativa All Over Crew" /> {/* Update path */}
        </div>
        <div className="thumbnail-images">
          <img src={Sneackers} alt="Thumbnail 1" /> {/* Update path */}
          <img src={Socks} alt="Thumbnail 2" /> {/* Update path */}
        </div>
      </div>
      <div className="product-details">
        <h1>Socks Indica And Sativa All Over Crew</h1>
        <p>Reviews . 4.6</p>
        <h2>$29.99</h2>
        <div className="colors">
          <p>Colors</p>
          <div className="color-options">
            <span className="color-option green"></span>
            <span className="color-option yellow"></span>
            <span className="color-option red"></span>
            <span className="color-option blue"></span>
          </div>
        </div>
        <div className="sizes">
          <p>Sizes</p>
          <div className="size-options">
            <span className="size-option">SS</span>
            <span className="size-option">S</span>
            <span className="size-option">M</span>
            <span className="size-option">L</span>
            <span className="size-option">XL</span>
          </div>
        </div>
        <button className="add-to-bag">Add to Bag</button>
        <button className="add-to-wishlist">Add to Wishlist</button>
        <div className="product-description">
          <h3>Product Details</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor interdum ante non ultrices. Mauris rutrum sit amet ex vitae porttitor.</p>
        </div>
        <button className="share-product">Share Product</button>
      </div>
    </div>
  );
};

export default Detail;
