import React from 'react'
import { useState } from 'react';
//import Swal from 'sweetalert2';
import './stylesItemDishToAdd.scss';

const ItemDishCurrentOrder = ({name, price, quantity}) => {


  return (
    <div className='container__item'>
        <div className='container__item__first'>
        <figure>
            <img src="https://res.cloudinary.com/dd8l8bm6q/image/upload/v1687033445/deliveryApp/zqoifj5ftfypzbrs0d6w.png" alt="" />
        </figure>      

        <div className=''>
         
          <p>x {quantity}</p>
        
        </div>

        <p className='container__quantity__name'>{name}</p>

        </div>
        <p className='container__quantity__price'>${price}</p>
   </div>
  )
}

export default ItemDishCurrentOrder