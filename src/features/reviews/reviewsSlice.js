import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const reviewsSlice = createSlice({
    name: "reviews",
    initialState: {
       entities: [],
    },
    reducers: {
      reviewAdded(state, action) {
        // console.log("action: ", action)
        state.entities.push({
            comment: action.payload.comment,
            restaurantId: action.payload.restaurantId,
            id: uuid(),
        })
      },
      reviewRemoved(state, action) {
        const indexOfReviewToRemove = state.entities.findIndex( (review) => review.id === action.payload )
        state.entities.splice(indexOfReviewToRemove, 1)
      } 
    }


})

export const {reviewRemoved, reviewAdded} = reviewsSlice.actions
export default reviewsSlice.reducer