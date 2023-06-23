import React from 'react';
import IconTime from '../assets/icons/time.png';
import '../components/dish/styleDish.scss';
import Checkbox from '@mui/material/Checkbox';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Dish = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const { restaurants } = useSelector((store) => store.restaurants);
  console.log(restaurants);

  const { restaurantId, dishId } = useParams();

  console.log('Restaurant ID:', restaurantId);
  console.log('Dish ID:', dishId);
  let dishFound = null;
  
  if (restaurants && restaurants.length > 0) {
    const restaurant = restaurants.find((item) => item.id === restaurantId);
    if (restaurant) {
      dishFound = restaurant.dishes.find((item) => item.id === dishId);
    }
  }
    console.log(dishFound)

  return (
    <div className='dish'>
      <div className="dish__top">
        <figure className='dish__image'>
          <img src={dishFound.image} alt={dishFound.name}/>
        </figure>
      </div>
      <div className="dish__bottom">
        <div className='dish__header'>
          <span className='dish__title'>{dishFound.name}</span>
          <div className="dish__time">
            <figure className='dish__iconTime'>
              <img src={IconTime} alt="" />
            </figure>
            <span className='dish__minutes'>15-20 min</span>
          </div>
        </div>
        <span className="dish__description">{dishFound.description}</span>
      </div>
      <div className="dish__aditional">
        <span className="aditional__title">Additional Ingredients</span>
      {dishFound.ingredients.map((item) => (
        <div className="dish__ingredients">
          <div className="dish__first">
            <Checkbox style={{padding: 0}}
              {...label}
              // defaultChecked
              sx={{
                color: '#A7A7A7',
                '&.Mui-checked': {
                  color: '#FFE031',
                },
              }}
            />
            <span className='ingredient'>{item.name}</span>
            <span>+{item.price}$</span>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Dish