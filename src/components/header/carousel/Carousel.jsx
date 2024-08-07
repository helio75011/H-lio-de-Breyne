import React from 'react';
import Slider from 'react-slick';
import './Carousel.css'; // Import the CSS file for styling
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Boxer from "./uploads/Boxer.png"
import Hats from "./uploads/Hats.png"
import Socks from "./uploads/Socks.png"

const Carousel = () => {
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
    <div className="carousel">
      <Slider {...settings}>
        <div className="carousel-item-collection">
          <img src={Boxer} alt="Boxers" />
          <div className="carousel-caption">
            <h3>Boxers</h3>
            <p>Explore the collection here</p>
          </div>
        </div>
        <div className="carousel-item-collection">
          <img src={Socks} alt="Socks" />
          <div className="carousel-caption">
            <h3>Socks</h3>
            <p>Explore the collection here</p>
          </div>
        </div>
        <div className="carousel-item-collection">
          <img src={Hats} alt="Hats" />
          <div className="carousel-caption">
            <h3>Hats</h3>
            <p>Explore the collection here</p>
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
      className={`${className} custom-arrow custom-next-arrow`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-prev-arrow`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
}

export default Carousel;