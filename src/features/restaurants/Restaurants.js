import React from "react";
import { v4 as uuid } from "uuid";
import { useSelector } from "react-redux";
import Restaurant from "./Restaurant";

function Restaurants() {
  <p>Restaurants</p>
  const restaurants = useSelector(state => state.restaurants.entities)
  console.log(restaurants)
  const renderRestaurants = restaurants.map( (restaurant) => <Restaurant key={uuid()} restaurant={restaurant}/> )
  
  return <ul>{renderRestaurants}</ul>;
}

export default Restaurants;
