// NavbarTop.jsx
import React from 'react';

const NavbarTop = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success py-0">
      <div className="container container-fluid">
        <a className="navbar-brand fs-6" href="#">
          <span className="fw-bold promo">Welcome to Fastkart!</span>
          Wrap new offers/gift every single day on Weekends.
          <span className="fw-bold">New Coupon Code: Fast024</span>
        </a>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        {/* Puedes agregar aquí el componente del menú desplegable y las opciones de idioma y moneda */}
      </div>
    </nav>
  );
};

export default NavbarTop;
