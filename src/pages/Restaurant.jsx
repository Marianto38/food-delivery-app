import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../components/restaurantDetail/styleRestaurant.scss'
import { Rating, Stack } from '@mui/material';
import Categories from '../components/restaurants/categories/Categories';
import DishGeneral from '../components/restaurantDetail/dishes/DishGeneral';

const Restaurant = () => {
  const navigate = useNavigate();

  const handleToHome = () => {
    navigate("/home");
  }
  return (
    <div className='restaurant'>
      <div className="restaurant__header">
        <span className='icono' onClick={handleToHome}><FontAwesomeIcon icon={faChevronLeft} style={{ color: "#414141" }} /></span>
        <figure className='restaurant__logo'>
          <img src="https://res.cloudinary.com/dd8l8bm6q/image/upload/v1687033445/deliveryApp/uvrsssymy3kgy0549ymj.png" alt="Logo restaurante"/>
        </figure>
      </div>
      <div className="restaurant__detail">
        <figure>
          <img className='restaurant__image'src="https://res.cloudinary.com/dd8l8bm6q/image/upload/v1687033445/deliveryApp/iwhrpcivp1rdhyng7jw0.png" alt="Restaurante 1" />
        </figure>
        <div className="restaurant__info">
          <span className="restaurant__title">Pardes Restaurant</span>
          <span className="restaurant__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
          <div className='restaurant__review'>
            <Stack spacing={1}>
                <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
            </Stack>
            <button className="restaurant__time">15-20 min</button>
          </div>
        </div>
      </div>
      <Categories/>
      <div className="dishes">
        <DishGeneral/>
        <DishGeneral/>
        <DishGeneral/>
        <DishGeneral/>
        <DishGeneral/>
        <DishGeneral/>
      </div>
    </div>
  )
}

export default Restaurant