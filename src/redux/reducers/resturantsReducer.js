import { restaurantsTypes } from "../types/userTypes";

const initialState = {
  restaurants: [],
};

export const restaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case restaurantsTypes.RESTAURANTS_GET:
      return {
        ...state,
        restaurants: action.payload.restaurants,
      };
    // case paletasTypes.PALETAS_ADD:
    //   return {
    //     ...state,
    //     paletas: [...state.paletas, action.payload],
    //   };
    // case paletasTypes.PALETAS_FILTERED:
    //   return {
    //     ...state,
    //     paletas: action.payload.paletas,
    //   };
    default:
      return state;
  }
};