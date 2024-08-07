import React from 'react';
import './Reviews.css';
import Noah from "./uploads/Noah.png";
import Theo from "./uploads/Theo.png"
import Peter from "./uploads/Peter.png"

const Reviews = () => {
  const reviews = [
    {
      name: "Noah Jasku",
      rating: 4.9,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper blandit tellus, eu sodales mauris venenatis id. Pellentesque rhoncus porttitor velit.",
      image: Noah // Update this path to your image
    },
    {
      name: "Theo Nunes",
      rating: 4.6,
      text: "Mauris in sem erat. Nulla in orci viverra, feugiat velit in, sollicitudin odio. Nam quis lacinia libero, et consectetur mi. Maecenas pellentesque luctus dui.",
      image: Theo // Update this path to your image
    },
    {
      name: "Peter Smith",
      rating: 4.1,
      text: "Duis maximus, nisi laoreet luctus vehicula, sem lectus pellentesque mauris, ac sodales libero felis ac nunc.",
      image: Peter // Update this path to your image
    }
  ];

  return (
    <div className="reviews">
      <h2>Reviews</h2>
      <div className="review-cards">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="review-header">
              <img src={review.image} alt={review.name} className="review-image" />
              <div className="review-rating">
                <span className="rating">{review.rating}</span>
                <span className="star">★</span>
              </div>
            </div>
            <p className="review-text">“{review.text}”</p>
            <p className="review-name">{review.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
