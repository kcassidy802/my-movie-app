import React, { useState } from 'react'; //importing our react again

const ReviewForm = ({ onReviewSubmit }) => { // here we see the code for the review form
  const [newReview, setNewReview] = useState({ text: '', rating: 0 });

  const handleReviewSubmit = () => {
    if (newReview.text.trim() !== '' && newReview.rating > 0) {
      onReviewSubmit(newReview);
      setNewReview({ text: '', rating: 0 });
    }
  };

  return (   //this is where we can input our review and give it a rating
    <div className="review-form"> 
      <label htmlFor="review-input">Leave Your Review Here</label>
      <textarea
        id="review-input"
        rows="3"
        value={newReview.text}
        onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
      ></textarea>
      <label>Rating:</label>
      <input
        type="number"
        value={newReview.rating}
        onChange={(e) => setNewReview({ ...newReview, rating: parseFloat(e.target.value) })}
      />
      <button type="button" onClick={handleReviewSubmit}>Submit Review</button>
    </div>
  );
};

const Movie = ({ movie }) => {  //updating reviews
  const [reviews, setReviews] = useState(movie.reviews || []);

  const handleReviewSubmit = (newReview) => {
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
  };

  return ( // here is our review list for the movie and form with its inner html styling
    <div style={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', margin: 'auto', padding: '20px', width: '250px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '1.5rem', color: '#333' }}>{movie.title}</h2>
      <img src={movie.poster} alt={`${movie.title} Poster`} width="200" style={{ borderRadius: '8px', marginBottom: '10px' }} />
      <p style={{ color: '#555', marginBottom: '10px' }}>Synopsis: {movie.synopsis}</p>
      <p style={{ color: '#555', marginBottom: '10px' }}>Average Rating: {calculateAverageRating(reviews)}</p>
      <div style={{ marginTop: '10px' }}>
       
        {reviews.map((review, index) => (
          <div key={index} style={{ backgroundColor: '#f9f9f9', border: '1px solid #ddd', borderRadius: '4px', margin: '5px', padding: '10px' }}>
            <p>{review.text}</p>
            <p>Rating: {review.rating}</p>
          </div>
        ))}
      </div>
     
      <ReviewForm onReviewSubmit={handleReviewSubmit} />
    </div>
  );
};
 // we even can calculate the average rating when multiple reviews are left
const calculateAverageRating = (reviews) => {
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return (sum / reviews.length).toFixed(1);
};

export default Movie;
