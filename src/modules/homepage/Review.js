import React from "react";
import Heading from "../../components/Heading";
import ReviewList from "../../components/review/ReviewList";

const Review = () => {
  return (
    <div className='wrapper'>
      <Heading>real customer review</Heading>
      <ReviewList></ReviewList>
    </div>
  );
};

export default Review;
