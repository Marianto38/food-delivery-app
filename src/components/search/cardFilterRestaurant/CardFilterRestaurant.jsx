import React from 'react'
import './stylesCardFilterRestaurant.scss'
import { useNavigate } from 'react-router-dom';

const CardFilterRestaurant = ({title, image, price, dishId, restaurant}) => {

  console.log(restaurant)
  const navigate = useNavigate();

  const handleNavigateToDishId = () => {
    navigate(`/restaurant/${restaurant}/dish/${dishId}`)
    // Otras lógicas relacionadas con la navegación al plato
    console.log('navegare a dish', dishId);
  };
  return (
    <>
    <div className='container__cardFilter' onClick={handleNavigateToDishId}>
        <figure>
            <img src={image} alt="" />
        </figure>
        <div className='container__cardFilter__description'>
        <p>{title}</p>
        <p className='container__cardFilter__p'>${price}</p>
        </div>
    </div>
    </>
  )
}

export default CardFilterRestaurant