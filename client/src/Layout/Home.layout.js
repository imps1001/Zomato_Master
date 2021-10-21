import {React,useEffect} from "react";
import { useDispatch} from 'react-redux';
//Components
import Navbar from "../Components/Navbar";
import FoodTab from "../Components/FoodTab";

//redux actions
import { getRestaurant } from "../Redux/Reducer/restaurant/restaurant.action";

const HomeLayout = (props) => {
const dispatch = useDispatch();

useEffect(()=> {
  dispatch(getRestaurant());
}, []);

  return (
  <div>
   <div className="container mx-auto lg:px-20">
   <Navbar />
   </div>
   <FoodTab />
  </div>
  )
};

export default HomeLayout;