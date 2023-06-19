import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Search from "../pages/Search";
import OrdersHistory from "../pages/OrdersHistory";
import Order from "../pages/Order";
//import Restaurant from "../pages/Restaurant";
//import Dish from "../pages/Dish";
import NewOrder from "../pages/NewOrder";
import OrderAccepted from "../pages/OrderAccepted";
import CurrentOrder from "../pages/CurrentOrder";
import Profile from "../pages/Profile";
import ProfileEdit from "../pages/ProfileEdit";
import PaymentMethod from "../pages/PaymentMethod";
import AddNewCard from "../pages/AddNewCard";

const DashboardRouter = () => {
  return (
    <Routes>
      <Route path={"/home"} element={<Home/>} />
      <Route path={"/search"} element={<Search/>} />
      <Route path={"/ordershistory"} element={<OrdersHistory/>} />
      <Route path={"/order/:id"} element={<Order/>} />
      {/* <Route path={"/restaurant/:id"} element={<Restaurant/>}>
        <Route path={"/dish/:id"} element={<Dish/>}/>
      </Route> */}
      <Route path={"/neworder"} element={<NewOrder/>} />
      <Route path={"/orderaccepted"} element={<OrderAccepted/>} />
      <Route path={"/currentorder"} element={<CurrentOrder/>} />
      <Route path={"/profile"} element={<Profile/>} />
      <Route path={"/profile/edite"} element={<ProfileEdit/>} />
      <Route path={"/profile/payment"} element={<PaymentMethod/>} />
      <Route path={"/profile/payment/newcard"} element={<AddNewCard/>} />
    </Routes>
  );
};

export default DashboardRouter;