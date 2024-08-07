import React from 'react';
import Slider from 'react-slick';
import './BestSellers.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Boxer from "./uploads/Boxer.png"
import Indica from "./uploads/Indica.png"
import Socks from "./uploads/Socks.png"

const BestSellers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="best-sellers">
      <h2>Best Sellers</h2>
      <Slider {...settings}>
        <div className="carousel-item">
          <img src={Socks} alt="Socks Indica And Sativa All Over Crew" />
          <div className="carousel-caption">
            <h3>Socks Indica And Sativa All Over Crew</h3>
            <p><span className="discount">35% OFF</span> $29.99 <span className="original-price">$39.99</span></p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Boxer} alt="Cana Leaf Adult's Boxer Briefs" />
          <div className="carousel-caption">
            <h3>Cana Leaf Adult's Boxer Briefs</h3>
            <p>$39.99</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Indica} alt="Socks Indica And Sativa All Over Crew" />
          <div className="carousel-caption">
            <h3>Socks Indica And Sativa All Over Crew</h3>
            <p>$29.99</p>
          </div>
        </div>
        {/* Add more items as needed */}
      </Slider>
    </div>
  );
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#A4E311' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#A4E311' }}
      onClick={onClick}
    />
  );
}

export default BestSellers;
