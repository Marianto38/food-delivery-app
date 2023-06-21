import React from "react";
import "./styleHeader.scss";
import { Carousel } from "react-bootstrap";
// import { Carousel } from "antd";

const Header = () => {
  return (
    <div className="header">
      <div className="header__top">
        <div className="header__left">
          <figure>
            <img
              src="https://res.cloudinary.com/didyub2vb/image/upload/v1687127484/Vector_pxojev.png"
              alt="Icono ubicación"
            />
          </figure>
          <div className="header__text">
            <span>Deliver To</span>
            <span>882 Well St, New-York</span>
          </div>
        </div>
        <div className="header__right">
          <figure>
            <img
              className="header__icon"
              src="https://res.cloudinary.com/dd8l8bm6q/image/upload/v1687033446/deliveryApp/oumm4vmttpba8iuafsit.png"
              alt="Icono usuario"
            />
          </figure>
        </div>
      </div>
      <div className="header__carrousel">
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/didyub2vb/image/upload/v1687190327/delivery1.jpg"
          alt="Imagen repartidor"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/didyub2vb/image/upload/v1687190327/8299360_3876105_zfbtvc.jpg"
          alt="Imagen publicidad"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/didyub2vb/image/upload/v1687190401/delivery2.jpg" alt="Imagen repartidor"
        />
      </Carousel.Item>
    </Carousel>
        {/* <Carousel autoplay>
          <div className="carousel__item">
            <img src="https://res.cloudinary.com/dd8l8bm6q/image/upload/v1687033446/deliveryApp/lhmbdfmgmvumwjdviztu.png" alt="Imagen oferta"/>
          </div>
          <div className="carousel__item">
            <img src="https://res.cloudinary.com/didyub2vb/image/upload/v1687190327/delivery1.jpg" alt="Imagen repartidor"/>
          </div>
          <div className="carousel__item">
            <img src="https://res.cloudinary.com/didyub2vb/image/upload/v1687190327/8299360_3876105_zfbtvc.jpg" alt="Imagen publicidad"/>
          </div>
          <div className="carousel__item">
            <img src="https://res.cloudinary.com/didyub2vb/image/upload/v1687190401/delivery2.jpg" alt="Imagen repartidor"/>
          </div>
        </Carousel> */}
      </div>
    </div>
  );
};

export default Header;
