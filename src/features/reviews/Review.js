import React from "react";
import { useDispatch } from "react-redux";
import { reviewRemoved } from "./reviewsSlice";

function Review({ review }) {
  const dispatch = useDispatch()

  function handleClick() {
    dispatch(reviewRemoved(review.id))
  }
  console.log("REVIEW: ", review)
  return (
    <div>
      <li>{review.comment}</li>
      <button onClick={handleClick}> Delete Review </button>
    </div>
  );
}

export default Review;
