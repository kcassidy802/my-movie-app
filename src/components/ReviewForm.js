import React, { useState } from 'react'; //importing

const ReviewForm = () => { //function for our ReviewForm
  const [newReview, setNewReview] = useState('');

  const handleReviewSubmit = () => { // The submit function for the review form and we see the placeholder as well 
    console.log('Submitted Review:', newReview);
  };

  return (
    <div>
      <textarea
        placeholder="Write your review..."
        value={newReview}
        onChange={(e) => setNewReview(e.target.value)}
      />
      <button onClick={handleReviewSubmit}>Submit Review</button>
    </div>
  );
};

export default ReviewForm;
