import React, {useState} from "react";
import Reviews from "./Reviews";
import { reviewAdded } from "./reviewsSlice";
import { useDispatch } from "react-redux";

function ReviewInput({ restaurantId }) {
  
  const [reviewText,setReviewText] = useState("")
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(reviewAdded({ reviewText, restaurantId}))
    // dispatch(reviewAdded({comment: reviewText, restaurantId: restaurantId}))
    setReviewText("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>comment
        <textarea onChange={(e) => setReviewText(e.target.value)} value={reviewText}></textarea></label>
        <button>Add Review</button>
      </form>
    </div>
  )
}

export default ReviewInput;
