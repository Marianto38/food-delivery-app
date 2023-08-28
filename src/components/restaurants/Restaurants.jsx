import React, { useEffect } from 'react'
import RestaurantCard from './card/RestaurantCard'
import './styleRestaurants.scss'
import { useDispatch, useSelector } from 'react-redux';
import { actionGetRestaurantsAsync } from '../../redux/actions/restaurantsActions';

const Restaurants = ({restaurants}) => {
  return (
    <div className='restaurants'>
      <RestaurantCard restaurants={restaurants}/>
    </div>
  )
}

export default Restaurants