import React from 'react';
import Slider from 'react-slick';
import './Licensed.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MTV from "./uploads/MTV.png"
import StarWars from "./uploads/StarWars.png"
import Disney from "./uploads/Disney.png"

const Licensed = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const brands = [
    { name: "MTV", logo: MTV }, // Update paths to your images
    { name: "Star Wars", logo: StarWars },
    { name: "Disney", logo: Disney },
    // Add more brands as needed
  ];

  return (
    <div className="licensed-brands">
      <h2>Licensed Brands</h2>
      <Slider {...settings}>
        {brands.map((brand, index) => (
          <div className="brand-item" key={index}>
            <img src={brand.logo} alt={brand.name} className="brand-logo" />
          </div>
        ))}
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

export default Licensed;
