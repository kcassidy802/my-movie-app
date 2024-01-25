import React from 'react'; //importing our reivews
import Review from './Review';

const ReviewList = ({ reviews }) => { //our reviewlist
  return (
    <div>
      <h3>Reviews:</h3>
      {reviews.map((review, index) => (
        <Review key={index} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;
