import { restaurantsTypes } from "../types/userTypes";

const initialState = {
  restaurants: [],
  recentQueries:[]
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
    case restaurantsTypes.RESTAURANT_FILTERED:
      return {
        ...state,
        restaurants: action.payload.restaurants,
      };

      case restaurantsTypes.SET_RECENT_QUERIES:
        return {
          ...state,
          recentQueries: [action.payload, ...state.recentQueries.slice(0, 4)],
        };
      
    default:
      return state;
  }
};