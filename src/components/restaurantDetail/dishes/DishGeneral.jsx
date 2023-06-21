import React from 'react';
import './syleDishGeneral.scss';
import { useNavigate } from 'react-router-dom';

const DishGeneral = () => {
  const navigate = useNavigate();

  const handleToDish = () => {
    navigate("/dish");
  }
  return (
    <div className='dishgeneral' onClick={handleToDish}>
        <figure>
            <img src="https://res.cloudinary.com/dd8l8bm6q/image/upload/v1687033445/deliveryApp/zqoifj5ftfypzbrs0d6w.png" alt="Plato" />
        </figure>
        <span className="dishgeneral__title">Bolognese salad</span>
        <span className="dishgeneral__price">$ 14.45</span>
    </div>
  )
}

export default DishGeneral