import React from "react";
import "./styleCategories.scss";
import { category } from "../../../services/dates";
import { useDispatch } from "react-redux";
import { actionFilterRestaurantsAsync, actionGetRestaurantsAsync } from "../../../redux/actions/restaurantsActions";

const Categories = () => {
  const dispatch = useDispatch();
  const onFiltered = (searchValue) => {
    const searchParam = "category";
    dispatch(actionFilterRestaurantsAsync(searchParam, searchValue));
  };

  return (
    <div className="categories">
      <button
        onClick={() => {
          dispatch(actionGetRestaurantsAsync());
        }}
      >
        All
      </button>
      {category.map((item) => (
        <button
          key={item.value}
          onClick={() => {
            onFiltered(item.label);
          }}
        >
          {item.emoji} {item.label}
        </button>
      ))}
      {/* <button>🍔 Fast food</button>
      <button>🍕 Pizza</button>
      <button>🍣 Sushi</button>
      <button>🥟 Empanadas</button>
      <button>🍤 Sea</button>
      <button>🥗 Vegano</button>
      <button>🍣 Sushi</button> */}
    </div>
  );
};

export default Categories;
