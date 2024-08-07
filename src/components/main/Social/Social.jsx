import React from 'react';
import Slider from 'react-slick';
import './Social.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Hypno from "./uploads/Hypno.png"
import Spirale from "./uploads/Spirale.png"
import Person from "./uploads/Person.png"

const Social = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const images = [
    { id: 1, src: Hypno }, // Update paths to your images
    { id: 2, src: Spirale },
    { id: 3, src: Person },
    // Add more images as needed
  ];

  return (
    <div className="social">
      <h2>Social</h2>
      <Slider {...settings}>
        {images.map((image) => (
          <div className="social-item" key={image.id}>
            <img src={image.src} alt={`Social ${image.id}`} className="social-image" />
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

export default Social;
