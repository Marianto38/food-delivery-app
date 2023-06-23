import React from 'react'
import AccountSummary from '../components/newOrder/accountSummary/AccountSummary'
import '../components/newOrder/accountSummary/stylesAccountSummary.scss'
import ItemDishCurrentOrder from '../components/currentOrder/itemDishCurrentOrder/ItemDishCurrentOrder'
import '../components/order/stylesOrder.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Order = () => {
  const count = 1

  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/dish')
  }

  return (
    <>
    <div className='container__order'>

    <div className='container__titles'>
        <FontAwesomeIcon icon={faChevronLeft} style={{ cursor: 'pointer', marginLeft: '1rem' }} onClick={handleBack} />
        <h2 className='container_order_title'>26.11.2022</h2>
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
    </div>
    </>
  )
}

export default Order