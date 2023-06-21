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

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user}   = useSelector((store) => store.user);
  console.log(user);

  const handleToProfile = () => {
    navigate('/profile')
  }

  return (
    <>
    <div>
      Home
      <div>
         <Image src={user?.avatar} roundedCircle />
        <h2>{user?.fullName}</h2> 
      </div>
      <button onClick={() => dispatch(logoutActionAsync())}>
        Cerrar Sesión
      </button>
      <button onClick={handleToProfile}> profile</button>
    </div>
    <section className='home'>
      <div className="home__header">
        <Header/>
      </div>
      <div className="home__restaurants">
        <p className='restaurants__title'>Restaurants and cafes</p>
        <Categories/>
        <Restaurants/>
      </div>
      <Footer/>
    </section>
    </>
  );
};


export default Home;
