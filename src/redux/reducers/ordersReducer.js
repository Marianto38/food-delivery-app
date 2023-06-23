import { ordersTypes } from "../types/orderTypes";

const initialState = {
  orders: [],
};

export const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ordersTypes.GET_ORDERS:
      return {
        ...state,
        orders: action.payload.orders,
      };
    case ordersTypes.ADD_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    // case ordersTypes.FILTERED_ORDER:
    //   return {
    //     ...state,
    //     orders: action.payload.orders,
    //   };
    default:
      return state;
  }
};