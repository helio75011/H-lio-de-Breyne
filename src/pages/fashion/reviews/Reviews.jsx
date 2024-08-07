import React from 'react';
import './Reviews.css';

const Reviews = () => {
  const reviews = [
    {
      name: "Patrick Smith",
      date: "30/02/23",
      rating: 5,
      title: "Amazing!",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae turpis eget turpis aliquam interdum nec sit amet neque."
    },
    {
      name: "Robert Zang",
      date: "30/02/23",
      rating: 5,
      title: "So Cool!",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae turpis eget turpis aliquam interdum nec sit amet neque."
    },
    {
      name: "Peter O'neil",
      date: "30/02/23",
      rating: 5,
      title: "My Style!",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    // Add more reviews as needed
  ];

  return (
    <div className="reviews">
      <h2>Reviews - 4.6 / 5</h2>
      <hr />
      {reviews.map((review, index) => (
        <div className="review" key={index}>
          <div className="review-info">
            <p>{review.name}</p>
            <p>{review.date}</p>
          </div>
          <div className="review-rating">
            {[...Array(review.rating)].map((star, i) => (
              <span key={i} className="star">★</span>
            ))}
          </div>
          <div className="review-content">
            <h3>{review.title}</h3>
            <p>{review.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
