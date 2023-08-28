import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import { restaurantsReducer } from "../reducers/resturantsReducer";
import { ordersReducer } from "../reducers/ordersReducer";

const reducer = {
    user: userReducer,
    paymentMethods: userReducer,
    restaurants: restaurantsReducer,
    orders: ordersReducer
};

const store = configureStore({
    reducer,
    devTool: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;