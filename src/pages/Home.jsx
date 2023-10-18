import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "react-bootstrap/Image";
import { logoutActionAsync } from "../redux/actions/userActions";
import { useNavigate } from 'react-router-dom';
import Header from '../components/home/header/Header'
import '../components/home/styleHome.scss'
import Restaurants from '../components/restaurants/Restaurants'
import Categories from '../components/restaurants/categories/Categories'
import { useEffect } from "react";
import { actionGetRestaurantsAsync } from "../redux/actions/restaurantsActions";
import { actionGetOrdersAsync } from "../redux/actions/ordersActions";
import BannerPrincipal from "../components/banners/BannerPrincipal";
import BannerSecondary from "../components/banners/BannerSecondary";
import Footer from "../components/footer/Footer";
import ProductContainer from "../components/productContainer/ProductContainer";
import PromotionProducts from "../components/promotionProducts/PromotionProducts";
import NavbarPrincipal from "../components/navbar/navbarPrincipal/NavbarPrincipal";

const Home = () => {
  const dispatch = useDispatch();

  // const { restaurants } = useSelector((store) => store.restaurants);
  // console.log(restaurants)

  // const { orders } = useSelector((store) => store.orders);
  // //console.log(orders);

  // const orderId = JSON.parse(localStorage.getItem('orderId'));
  // let recentOrder = ''

  // if (orders && orders.length > 0) {
  //   recentOrder = orders.find((item) => item.id === orderId);
  // }


  // const { user } = useSelector((store) => store.user);
  // console.log(user);

  // useEffect(() => {
  //   dispatch(actionGetRestaurantsAsync());
  //   dispatch(actionGetOrdersAsync());
  // }, [dispatch]);

  // const navigate = useNavigate();

  // const handleToOrder = () => {
  //   navigate('/order');
  // }

  return (
    <>
    <BannerPrincipal/>
    <BannerSecondary/>
    <PromotionProducts/>
    <ProductContainer/>
    <Footer/>
    </>

    // <section className='home'>
    //   <div className="home__header">
    //     <Header />
    //   </div>
    //   <div className="home__restaurants">
    //     <p className='restaurants__title'>Restaurants and cafes</p>
    //     <Categories />
    //     <Restaurants restaurants={restaurants} />
    //   </div>

    //   {recentOrder &&
    //     <>
    //       <button onClick={handleToOrder} type="submit"
    //         style={{
    //           width: '90%',
    //           height: '44px',
    //           backgroundColor: `#FFE031`,
    //           border: 'none',
    //           borderRadius: '10px',
    //           position: 'fixed',
    //           bottom: '60px',
    //           display: 'flex',
    //           justifyContent: 'space-around',
    //           alignItems: 'center',
    //           marginRight: '10px'

    //         }}>
    //         <span style={{ backgroundColor: 'black', color: 'white', width: '22px', textAlign: 'center', borderRadius: '5px', marginRight: '10px' }}>{recentOrder.quantity}</span>
    //         <span>View Card</span> <span>{recentOrder.total}</span>
    //       </button>
    //     </>
    //   }
    //   <Footer />
    // </section>
  );
};


export default Home;
