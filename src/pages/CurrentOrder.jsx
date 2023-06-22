import React from 'react'
import ItemDishCurrentOrder from '../components/currentOrder/itemDishCurrentOrder/ItemDishCurrentOrder'
import AccountSummary from '../components/newOrder/accountSummary/AccountSummary'
import BtnCta from '../components/common/btnCta/BtnCta'
import '../components/currentOrder/stylesCurrentOrder/stylesCurrentOrder.scss'
import SteperCurrentOrder from '../components/currentOrder/steperCurrentOrder/SteperCurrentOrder'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';


const CurrentOrder = () => {

  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/home')
  }

  return (
    <div className='container__currentOrder'>

      <div>
        <div className='container__titles'>
          <FontAwesomeIcon icon={faChevronLeft} style={{ cursor: 'pointer', marginLeft:'1rem' }} onClick={handleBack} />
          <h2 className='container__currentOrder__title'>Current Order</h2>
        </div>
        <div className='container__currentOrder__img'>
          <figure >
            <img src="https://res.cloudinary.com/dd8l8bm6q/image/upload/v1687385743/deliveryApp/p9yqdcjl6zijfglvhdye.png" alt="" />
          </figure>
          <p>15-20 min left</p>
          <SteperCurrentOrder />
        </div>
      </div>

      <div className='container__itemDish'>
        <ItemDishCurrentOrder />
      </div>

      <AccountSummary
        descriptionOne={"Products"}
        descriptionTwo={"60.45$"}
        priceOne={"Delivery"}
        priceTwo={"4.5$"}
        total={" Total"}
        priceTotal={"64.95$"}

      />

      <BtnCta cta={'Support'} bgColor={'#FFE031'} type={'submit'} navigateTo={'/currentorder'} />
    </div>
  )
}

export default CurrentOrder