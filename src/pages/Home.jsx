import React from 'react'
import Header from '../components/home/header/Header'
import '../components/home/styleHome.scss'
import Restaurants from '../components/restaurants/Restaurants'
import Categories from '../components/restaurants/categories/Categories'
import Footer from '../components/home/footer/Footer'

const Home = () => {
  return (
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
  )
}

export default Home