import React from 'react';
import IconTime from '../assets/icons/time.png';
import '../components/dish/styleDish.scss';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Counter from '../components/common/btnCta/counter/Counter';
import { useState } from 'react';
//import { actionAddOrderAsync } from '../redux/actions/ordersActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

const Dish = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [count, setCount] = useState(1);
  console.log(count)

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

  const total = 5

  let ingredientesSelected = []

  const handleIngredientChange = (ingredientName) => {
    console.log('checkedon', ingredientName)
    ingredientesSelected.push(ingredientName);

    console.log(ingredientesSelected)
  }

  const dish = {
    name: dishFound?.name,
    image: dishFound?.image,
    description: dishFound?.description,
    ingredientes: ingredientesSelected || "ninguno",
    price: dishFound?.price,
    quantity: count,
    delivery: 4.55
  }
  console.log(dish.name)

  const handleAddDishToOrder = () => {
    if (dish.quantity > 0) {
      
      localStorage.setItem('dish', JSON.stringify(dish))
      navigate('/neworder');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You need to add a quantity!',
      })
    }

  };



  return (
    <div className='dish'>
      <div className="dish__top">
      <FontAwesomeIcon icon={faChevronLeft} style={{ cursor: 'pointer', marginLeft: '1rem', position:'fixed', top:'1rem' }} onClick={() => navigate(-1)} />
        <figure className='dish__image'>
          <img src={dishFound?.image} alt={dishFound?.name} />
        </figure>
      </div>
      <div className="dish__bottom">
        <div className='dish__header'>
          <span className='dish__title'>{dishFound?.name}</span>
          <div className="dish__time">
            <figure className='dish__iconTime'>
              <img src={IconTime} alt="" />
            </figure>
            <span className='dish__minutes'>15-20 min</span>
          </div>
        </div>
        <span className="dish__description">{dishFound?.description}</span>
      </div>
      <div className="dish__aditional">
        <span className="aditional__title">Additional Ingredients</span>
        {dishFound?.ingredients.map((item) => (
          <div className="dish__ingredients" key={item.id}>
            <div className="dish__first">
              <Checkbox
                style={{ padding: 0 }}
                sx={{
                  color: '#A7A7A7',
                  '&.Mui-checked': {
                    color: '#FFE031',
                  },
                }}
                onChange={() => handleIngredientChange(item.name)}
              />
              <span className='ingredient'>{item?.name}</span>
              <span>+{item?.price}$</span>
            </div>
          </div>
        ))}
      </div>
      <div className='dish__container__total'>
        <Counter count={count} setCount={setCount} />
        <div className='dish__btn__addOrder'>
          <button onClick={handleAddDishToOrder}><span >ADD</span> <span >$ {dishFound?.price }</span></button>
        </div>
      </div>

    </div>
  )
}

export default Dish