import React from 'react';
import './Reserved.css';
import Logo from "./uploads/Logo.png"

const Reserved = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo-section">
          <img src={Logo} alt="HypnoCrazy" className="footer-logo" /> {/* Update path to your logo */}
        </div>
        <div className="footer-section">
          <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
          <p>Stay tuned for exclusive discounts and crazy events</p>
          <form className="subscribe-form">
            <input type="email" placeholder="Your E-mail" required />
            <button type="submit">Subscribe Now</button>
          </form>
        </div>
        <div className="footer-section">
          <h4>NEED ANY HELP?</h4>
          <ul>
            <li><a href="#return-policy">Return Policy</a></li>
            <li><a href="#shipping-policy">Shipping Policy</a></li>
            <li><a href="#privacy-policy">Privacy Policy</a></li>
            <li><a href="#help-center">Help Center</a></li>
            <li><a href="#sitemap">Sitemap</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>MORE TO KNOW</h4>
          <ul>
            <li><a href="#my-account">My Account</a></li>
            <li><a href="#wishlist">Wishlist</a></li>
            <li><a href="#the-brand">The Brand</a></li>
            <li><a href="#boxers">Boxers</a></li>
            <li><a href="#socks">Socks</a></li>
            <li><a href="#hats">Hats</a></li>
            <li><a href="#loungewear">Loungewear</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>SOCIAL MEDIA</h4>
          <ul className="social-media">
            <li><a href="#tiktok"><i className="fa fa-tiktok"></i> Tiktok</a></li>
            <li><a href="#instagram"><i className="fa fa-instagram"></i> Instagram</a></li>
            <li><a href="#facebook"><i className="fa fa-facebook"></i> Facebook</a></li>
            <li><a href="#youtube"><i className="fa fa-youtube"></i> YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 HypnoCrazy - All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Reserved;
