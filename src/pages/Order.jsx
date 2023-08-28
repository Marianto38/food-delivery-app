import React from 'react'
import AccountSummary from '../components/newOrder/accountSummary/AccountSummary'
import '../components/newOrder/accountSummary/stylesAccountSummary.scss'
import ItemDishCurrentOrder from '../components/currentOrder/itemDishCurrentOrder/ItemDishCurrentOrder'
import '../components/order/stylesOrder.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Order = () => {
  const count = 1

  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/dish')
  }

  const { orders } = useSelector((store) => store.orders);
  //console.log(orders);

  const orderId = JSON.parse(localStorage.getItem('orderId'));
  let recentOrder = ''

  if (orders && orders.length > 0) {
    recentOrder = orders.find((item) => item.id === orderId);
  }


  return (
    <>
    <div className='container__order'>

    <div className='container__titles'>
        <FontAwesomeIcon icon={faChevronLeft} style={{ cursor: 'pointer', marginLeft: '1rem' }} onClick={handleBack} />
        <h2 className='container_order_title'>26.11.2022</h2>
      </div>

      <div className='container__itemDish'>
        <ItemDishCurrentOrder name={recentOrder.name} price={recentOrder.price} quantity={recentOrder.quantity} />
      </div>


      <AccountSummary
        descriptionOne={"Products"}
        descriptionTwo={"Delivery"}
        priceOne={recentOrder.price}
        priceTwo={"4.5$"}
        total={" Total"}
        priceTotal={recentOrder.total}

      />
    </div>
    </>
  )
}

export default Order