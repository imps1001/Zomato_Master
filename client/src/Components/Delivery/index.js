import React, {useState, useEffect} from "react";

import {useSelector} from "react-redux";
import DeliveryCarousal from "./DeliveryCarousal";

const Delivery = () => {
const [setRestaurantList] = useState([]);

const reduxState = useSelector(
  (globalStore) => globalStore.restaurant.restaurants
);

useEffect(()=>{
  setRestaurantList(reduxState.restaurants);
}, [reduxState.restaurants]);

  return (
    <div>
    <DeliveryCarousal />
    </div>
  );
};

export default Delivery;