import React from 'react';
import IconTime from '../assets/icons/time.png';
import '../components/dish/styleDish.scss';

const Dish = () => {
  return (
    <div className='dish'>
      <div className="dish__top">
        <figure className='dish__image'>
          <img src="https://res.cloudinary.com/didyub2vb/image/upload/v1687303112/Img_2_tj0xtf.png" alt=""/>
        </figure>
      </div>
      <div className="dish__bottom">
        <div className='dish__header'>
          <span className='dish__title'>Caesar salad without sauge</span>
          <div className="dish__time">
            <figure className='dish__iconTime'>
              <img src={IconTime} alt="" />
            </figure>
            <span className='dish__minutes'>15-20 min</span>
          </div>
        </div>
        <span className="dish__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
      </div>
    </div>
  )
}

export default Dish