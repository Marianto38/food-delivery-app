import React from 'react'
import { useState } from 'react';
import Swal from 'sweetalert2';
import './stylesItemDishToAdd.scss';

const ItemDishToAdd = ({ countSelected, dishName, price}) => {

  const [count, setCount] = useState(countSelected)

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
      };
    
      const decrement = () => {
        setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
      };
    
      console.log(count)
      localStorage.setItem('countDishInNewOrder', JSON.stringify(count))
//     if (count >= 1) {
//         const orderPizzaDetails = {
//             pizza: pizzaFound,
//             quantityPizza: count,
//         }
//         console.log(orderPizzaDetails);
//         updateOrderPizza(orderPizzaDetails);
//         Swal.fire({
//             position: 'top-end',
//             icon: 'success',
//             title: `¡Se agregó ${count}  ${pizzaFound?.name}!`,
//             showConfirmButton: false,
//             timer: 1500
//           }).then(() => {
//             navigate('/cart');
//           });
        
//     } else {
//         Swal.fire({
//             position: 'top-end',
//             icon: 'warning',
//             title: '¡No has agregado una pizza!',
//             showConfirmButton: false,
//             timer: 1500
//           })
//         console.log('no has seleccionado pizza');
//     }

// console.log(orderPizza);




  return (
    <div className='container__item'>
        <div className='container__item__first'>
        <figure>
            <img src="https://res.cloudinary.com/dd8l8bm6q/image/upload/v1687033445/deliveryApp/zqoifj5ftfypzbrs0d6w.png" alt="" />
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