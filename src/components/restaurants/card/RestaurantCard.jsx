import React from "react";
import './styleRestaurantCard.scss';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const RestaurantCard = () => {
  return (
    <div className="cardRestaurant">
      <div className="cardRestaurant__image">
        <figure>
          <img src="https://res.cloudinary.com/dd8l8bm6q/image/upload/v1687033445/deliveryApp/iwhrpcivp1rdhyng7jw0.png" alt="Restaurante 1" />
        </figure>
      </div>
      <div className="cardRestaurant__info">
        <span>Pardes Restaurant</span>
        <Stack spacing={1}>
            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
        </Stack>
        <span>Work time 09:30 - 23:00</span>
        <span>Before you 4$</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
