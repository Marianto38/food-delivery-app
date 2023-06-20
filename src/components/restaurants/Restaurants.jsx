import React from 'react'
import RestaurantCard from './card/RestaurantCard'
import './styleRestaurants.scss'

const Restaurants = () => {
  return (
    <div className='restaurants'>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
    </div>
  )
}

export default Restaurants