import React from "react";
import "./styleRestaurantCard.scss";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

const RestaurantCard = ({ restaurants }) => {
  const navigate = useNavigate();

  const handleToRestaurant = () => {
    navigate("/restaurant");
  };
  return (
    <>
      {restaurants && restaurants.length > 0 ? (
        restaurants.map((item) => (
          <div onClick={handleToRestaurant} className="cardRestaurant" key={item.id}>
            <div className="cardRestaurant__image">
              <figure>
                <img src={item.image} alt={item.name} />
              </figure>
            </div>
            <div className="cardRestaurant__info">
              <span className="cardRestaurant__title">{item.name}</span>
              <Stack spacing={1}>
                <Rating
                  name="half-rating-read"
                  defaultValue={item.rating}
                  precision={0.5}
                  readOnly
                />
              </Stack>
              <span className="cardRestaurant__worktime">
                Work time {item.worktime}
              </span>
              <span className="cardRestaurant__before">
                Before you {item.price}$
              </span>
            </div>
          </div>
        ))
      ) : (
        <>No existen restaurantes</>
      )}
    </>
  );
};

export default RestaurantCard;
