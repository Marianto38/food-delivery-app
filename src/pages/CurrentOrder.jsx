import React, { useEffect } from 'react'
import ItemDishCurrentOrder from '../components/currentOrder/itemDishCurrentOrder/ItemDishCurrentOrder'
import AccountSummary from '../components/newOrder/accountSummary/AccountSummary'
import BtnCta from '../components/common/btnCta/BtnCta'
import '../components/currentOrder/stylesCurrentOrder/stylesCurrentOrder.scss'
import SteperCurrentOrder from '../components/currentOrder/steperCurrentOrder/SteperCurrentOrder'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { actionGetOrdersAsync } from '../redux/actions/ordersActions'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'


const CurrentOrder = () => {

  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetOrdersAsync());
  }, [dispatch]);

  const { orders } = useSelector((store) => store.orders);
  console.log(orders);

  const orderId = JSON.parse(localStorage.getItem('orderId'));
  let recentOrder = ''

  if (orders && orders.length > 0) {
    recentOrder = orders.find((item) => item.id === orderId);
  }
  console.log(recentOrder)

  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/home')
  }

  const [recentOrderState, setRecentOrderState] = useState(recentOrder.status);
console.log(typeof(recentOrderState))
  useEffect(() => {
    const timeout = setTimeout(() => {
      setRecentOrderState(2);
    }, 15000); 

    return () => clearTimeout(timeout); // Limpiar el timeout al desmontar el componente
  }, []);


  return (
    <div className='container__currentOrder'>

      <div>
        <div className='container__titles'>
          <FontAwesomeIcon icon={faChevronLeft} style={{ cursor: 'pointer', marginLeft: '1rem' }} onClick={handleBack} />
          <h2 className='container__currentOrder__title'>Current Order</h2>
        </div>
        <div className='container__currentOrder__img'>
          <figure >
            <img src="https://res.cloudinary.com/dd8l8bm6q/image/upload/v1687385743/deliveryApp/p9yqdcjl6zijfglvhdye.png" alt="" />
          </figure>
          <p>15-20 min left</p>
          <SteperCurrentOrder stepStatus={recentOrderState}/>
        </div>
      </div>

      <div className='container__itemDish'>
        <ItemDishCurrentOrder name={recentOrder.name} price={recentOrder.price} quantity={recentOrder.quantity}/>
      </div>

      <AccountSummary
        descriptionOne={"Products"}
        descriptionTwo={'Delivery'}
        priceOne={recentOrder.price}
        priceTwo={recentOrder.delivery}
        total={" Total"}
        priceTotal={recentOrder.total}

      />

      <BtnCta cta={'Support'} bgColor={'#FFE031'} type={'submit'} navigateTo={'/currentorder'} />
    </div>
  )
}

export default CurrentOrder