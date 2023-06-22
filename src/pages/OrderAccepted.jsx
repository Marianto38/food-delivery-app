import React from 'react'
import BtnCta from '../components/common/btnCta/BtnCta'

const OrderAccepted = () => {
  return (
    <>
        <p style={{ textAlign: 'center', marginTop: '2rem' }}>Order is accepted</p>
        <figure style={{}}>
          <img src="https://res.cloudinary.com/dd8l8bm6q/image/upload/v1687033444/deliveryApp/r2va44z4vgdn97hf480u.png" alt="" />
        </figure>
      <div style={{ marginTop:'20rem' }}>
        <BtnCta cta={'Follow Order'} bgColor={'#FFE031'} type={'submit'} navigateTo={'/currentorder'} />
      </div>
    </>
  )
}

export default OrderAccepted