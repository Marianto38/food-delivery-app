import React from 'react';
import './syleDishGeneral.scss';
import { useNavigate, useParams } from 'react-router-dom';

const DishGeneral = ({restaurantsFound}) => {

  const navigate = useNavigate();
  const handleToDish = (dishId) => {
    navigate(`/restaurant/${restaurantsFound.id}/dish/${dishId}`);
  }
  console.log(restaurantsFound)
  return (
    <>
    {restaurantsFound.dishes.map((dish) => (
      <div className='dishgeneral' onClick={()=> handleToDish(dish.id)} key={dish.id}>
        <figure>
          <img src={dish.image} alt={dish.name} />
        </figure>
        <span className="dishgeneral__title">{dish.name}</span>
        <span className="dishgeneral__price">$ {dish.price}</span>
      </div>
    ))}
  </>
  )
}

export default DishGeneral