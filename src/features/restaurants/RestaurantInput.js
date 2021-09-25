import React, {useState} from "react";
import { restaurantAdded } from "./restaurantsSlice";
import { useDispatch } from "react-redux";
function RestaurantInput() {
 
  const [name, setName] = useState("")
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()
    // dispatch action to add restaurant to restaurants
    dispatch(restaurantAdded(name))
    setName("")
  }

   return (<div>
    <form onSubmit={handleSubmit}>
      <label>name
      <input name="name" onChange={(e) => setName(e.target.value)} type="text" value={name}/></label>
      <button type="submit">Add Restaurant</button>
    </form>
  </div>);
}

export default RestaurantInput;
