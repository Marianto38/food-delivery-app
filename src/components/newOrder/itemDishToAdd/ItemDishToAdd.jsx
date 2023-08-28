import React from 'react'
import { useState } from 'react';
import Swal from 'sweetalert2';
import './stylesItemDishToAdd.scss';

const ItemDishToAdd = ({ countSelected, dishName, price, dishImage}) => {

  const [count, setCount] = useState(countSelected)

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
      };
    
      const decrement = () => {
        setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
      };
    
      console.log(count)
      localStorage.setItem('countDishInNewOrder', JSON.stringify(count))

  return (
    <div className='container__item'>
        <div className='container__item__first'>
        <figure>
            <img src={dishImage} alt="" />
        </figure>      

        <div className='container__quantity'>
          <button onClick={decrement} className='container__quantity--decrement'>-</button>
          <p>{count}</p>
          <button onClick={increment} className='container__quantity--increment'>+</button>
        </div>

        <p className='container__quantity__name'>{dishName}</p>

        </div>
        <p className='container__quantity__price'>${price}</p>
   </div>
  )
}

export default ItemDishToAdd