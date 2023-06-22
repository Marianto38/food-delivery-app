import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../components/restaurantDetail/styleRestaurant.scss'
import { Rating, Stack } from '@mui/material';
import Categories from '../components/restaurants/categories/Categories';
import DishGeneral from '../components/restaurantDetail/dishes/DishGeneral';
import { useSelector } from 'react-redux';

const Restaurant = () => {
  const navigate = useNavigate();
  const { restaurants} = useSelector((store) => store.restaurants);

  const { id } = useParams();
  const restaurantsFound = restaurants.find((item) => item.id === id);

  const handleToHome = () => {
    navigate("/home");
  }
  return (
      <div className='restaurant' key={restaurantsFound.id}>
        <div className="restaurant__header">
          <span className='icono' onClick={handleToHome}><FontAwesomeIcon icon={faChevronLeft} style={{ color: "#414141" }} /></span>
          <figure className='restaurant__logo'>
            <img src="https://res.cloudinary.com/dd8l8bm6q/image/upload/v1687033445/deliveryApp/uvrsssymy3kgy0549ymj.png" alt="Logo restaurante"/>
          </figure>
        </div>
        <div className="restaurant__detail">
          <figure>
            <img className='restaurant__image' src={restaurantsFound.image} alt={restaurantsFound.name} />
          </figure>
          <div className="restaurant__info">
            <span className="restaurant__title">{restaurantsFound.name}</span>
            <span className="restaurant__description">{restaurantsFound.description}</span>
            <div className='restaurant__review'>
              <Stack spacing={1}>
                  <Rating name="half-rating-read" defaultValue={restaurantsFound.rating} precision={0.5} readOnly />
              </Stack>
              <button className="restaurant__time">{restaurantsFound.averageDelivery} min</button>
            </div>
          </div>
        </div>
        <Categories/>
        <div className="dishes">
          <DishGeneral restaurantsFound={restaurantsFound}/>
        </div>
      </div>
  )
}

export default Restaurant