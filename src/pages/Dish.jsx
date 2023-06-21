import React from 'react';
import IconTime from '../assets/icons/time.png';
import '../components/dish/styleDish.scss';
import Checkbox from '@mui/material/Checkbox';

const Dish = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
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
      <div className="dish__aditional">
        <span className="aditional__title">Additional Ingredients</span>
        <div className="dish__ingredients">
          <div className="dish__first">
            <Checkbox style={{padding: 0}}
              {...label}
              defaultChecked
              sx={{
                color: '#A7A7A7',
                '&.Mui-checked': {
                  color: '#FFE031',
                },
              }}
            />
            <span className='ingredient'>Tomatoes</span>
            <span>+2$</span>
          </div>
          <div className="dish__second">
            <Checkbox style={{padding: 0}}
              {...label}
              sx={{
                color: '#A7A7A7',
                '&.Mui-checked': {
                  color: '#FFE031',
                },
              }}
            />
            <span className='ingredient'>Grain</span>
            <span>+1$</span>
          </div>
          <div className="dish__third">
            <Checkbox style={{padding: 0}}
              {...label}
              sx={{
                color: '#A7A7A7',
                '&.Mui-checked': {
                  color: '#FFE031',
                },
              }}
            />
            <span className='ingredient'>Lettuce leaf</span>
            <span>+1$</span>
          </div>
        </div>
      </div>
      div
    </div>
  )
}

export default Dish