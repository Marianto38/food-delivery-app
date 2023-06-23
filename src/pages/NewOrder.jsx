import React, { useState } from 'react'
//import Categories from '../components/restaurants/categories/Categories'
import { useDispatch, useSelector } from 'react-redux';
import '../components/newOrder/stylesNewOrder/stylesNewOrder.scss'
import ItemDishToAdd from '../components/newOrder/itemDishToAdd/ItemDishToAdd';
import AccountSummary from '../components/newOrder/accountSummary/AccountSummary';
import BtnCta from '../components/common/btnCta/BtnCta';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { actionAddOrderAsync, actionGetOrdersAsync } from '../redux/actions/ordersActions';


const NewOrder = () => {


  const { user } = useSelector((store) => store.user);
  console.log(user);
  // Recuperar el objeto dish del localStorage
  const dish = JSON.parse(localStorage.getItem('dish'));
  console.log(dish)
  const countDishInNewOrder = JSON.parse(localStorage.getItem('countDishInNewOrder'));
  console.log(countDishInNewOrder)

  const dispatch = useDispatch();

  const { orders } = useSelector((store) => store.orders);
  console.log(orders);

  const [selectedOption, setSelectedOption] = useState('Cash');
  console.log(selectedOption)

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    console.log(`Selected option: ${option}`);
  };

  const [inputValueNote, setInputValueNote] = useState('');
  console.log(inputValueNote)

  useEffect(() => {
    // dispatch(actionGetRestaurantsAsync());
    dispatch(actionGetOrdersAsync());
  }, [dispatch]);

  const navigate = useNavigate();
  // const handleBack = () => {
  //   navigate('/home')
  // }
  // const history = useHistory();

  // const handleBack = () => {
  //   history.goBack();
  // }

  const { paymentMethods } = useSelector((store) => store.paymentMethods);

  const summaryOrder = {
    subtotal: (dish.price * dish.quantity).toFixed(2),
    total: (dish.price * dish.quantity + dish.delivery).toFixed(2)
  };
  

  const dishToConfirm = {
    name: dish.name,
    image: dish.image,
    description: dish.description,
    ingredientes: dish.ingredientes || [],
    price: dish.price,
    quantity: countDishInNewOrder,
    delivery: dish.delivery,
    subtotal: summaryOrder.subtotal,
    total: summaryOrder.total,
    note: inputValueNote,
    status: 1,
    payment: selectedOption,
  }
  console.log(dishToConfirm)

  const handleConfirmOrder = () => {
    console.log('click order')
    dispatch(actionAddOrderAsync(dishToConfirm)).then(() => {
      navigate('/orderaccepted');
      localStorage.removeItem('countDishInNewOrder');

    })
  }

  return (
    <div className='container__payment'>
      <div className='container__titles'>
        <FontAwesomeIcon icon={faChevronLeft} style={{ cursor: 'pointer', marginLeft: '1rem' }} onClick={() => navigate(-1)} />
        <h2 className='container__currentOrder__title'>New Order</h2>
      </div>
      <div className="header__top">
        <div className="header__left">
          <figure>
            <img
              src="https://res.cloudinary.com/didyub2vb/image/upload/v1687127484/Vector_pxojev.png"
              alt="Icono ubicación"
            />
          </figure>
          <div className="header__text">
            <span>Deliver To</span>
            <span>{user?.address ? user?.address : ("882 Well St, New-York") }</span>
          </div>
        </div>
        <div className="header__right">
          <figure>
            <img
              className="header__icon"
              src="https://res.cloudinary.com/dd8l8bm6q/image/upload/v1687033446/deliveryApp/oumm4vmttpba8iuafsit.png"
              alt="Icono usuario"
            />
          </figure>
        </div>
      </div>

      <div className="categories__payment">
        <button onClick={() => handleOptionChange('Cash')}>Cash</button>
        <button onClick={() => handleOptionChange('Credit Card')}>  <img style={{ width: '20px', marginRight: '8px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhk6DPdj5GXJwYGRsxzeHqrWcqMhiPjtESrLsN2Yv7uQ&s" alt="" /> {paymentMethods.user ? paymentMethods.user.creditCard : "2344....4589"} </button>
        <button onClick={() => handleOptionChange('Paypal')}>  <img style={{ width: '20px', marginRight: '8px' }} src="data:image/png;base64,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" alt="" /> {paymentMethods.user ? paymentMethods.user.paypal : "user@gmail.com"} </button>
        <button onClick={() => handleOptionChange('Other')}>  <img style={{ width: '20px', marginRight: '8px' }} src="data:image/png;base64,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" alt="" /> {paymentMethods.user ? paymentMethods.user.creditCard : "2344....4589"} </button>
      </div>

      <h2 className='container__titlePayment'>Payment</h2>

      <div className='container__itemDish'>
        <ItemDishToAdd countSelected={dish.quantity} dishName={dish.name} price={dish.price} />
      </div>

      <div className='container__input'>
        <p>Note</p>
        <form action="" className='input__note'>
          <input type="text" placeholder='Write something' className='' value={inputValueNote}
            onChange={(e) => setInputValueNote(e.target.value)} />
        </form>
      </div>

      <AccountSummary
        descriptionOne={"Products"}
        descriptionTwo={"Delivery"}
        priceOne={`${summaryOrder?.subtotal}`}
        priceTwo={`${dish?.delivery}`}
        total={" Total"}
        priceTotal={`${summaryOrder?.total}`}

      />
      {/* <button onClick={handleConfirmOrder}>aaa</button> */}
      <button onClick={handleConfirmOrder} type="submit"
        style={{
          width: '100%',
          height: '44px',
          backgroundColor: `#FFE031`,
          border: 'none',
          borderRadius: '10px'
        }}>
        <span>Order</span>
      </button>

      {/* <BtnCta cta={'Order'} bgColor={'#FFE031'} type={'submit'} onClick={handleConfirmOrder} /> */}

    </div>
  )
}

export default NewOrder