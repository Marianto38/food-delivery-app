import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "react-bootstrap/Image";
import { logoutActionAsync } from "../redux/actions/userActions";
import { useNavigate } from 'react-router-dom';
import Header from '../components/home/header/Header'
import '../components/home/styleHome.scss'
import Restaurants from '../components/restaurants/Restaurants'
import Categories from '../components/restaurants/categories/Categories'
import Footer from '../components/home/footer/Footer'
import { useEffect } from "react";
import { actionGetRestaurantsAsync } from "../redux/actions/restaurantsActions";

const Home = () => {
  const dispatch = useDispatch();

  const { restaurants}   = useSelector((store) => store.restaurants);
  console.log(restaurants)

  useEffect(() => {
    dispatch(actionGetRestaurantsAsync());
  }, [dispatch]);

  return (
    <section className='home'>
      <div className="home__header">
        <Header/>
      </div>
      <div className="home__restaurants">
        <p className='restaurants__title'>Restaurants and cafes</p>
        <Categories/>
        <Restaurants restaurants={restaurants}/>
      </div>
      <Footer/>
    </section>
  );
};


export default Home;
