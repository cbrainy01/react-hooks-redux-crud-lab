import React from "react";
import { useSelector } from "react-redux";
import Review from "./Review";
import { v4 as uuid } from "uuid";


function Reviews({reviews}) {

  // const reviews = useSelector(state => state.reviews.entities)
  // console.log("--reviews: ", reviews)
  // const renderReviews = reviews.map( (review) => (<Review key={uuid()} review={review} />) )
  const renderReviews = reviews.map( (review) => <Review review={review}/> )
  return <ul>{renderReviews}</ul>;
}

export default Reviews;
