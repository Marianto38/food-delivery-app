import React from 'react';
import { Navbar, Nav, Container, Dropdown, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faSearch, faUser, faCartShopping, faHeart, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import './navbarSecondary.scss'

const NavbarSecondary = () => {
  return (
    <Navbar className='navbarSecondary__nav' expand="lg" bg="light">
        <button className='navbarSecondary__btn__categorys'>

      <span className="px-2"> All Categories</span>
        </button>
       
        <button className='navbarSecondary__btn__categorys'>
        <FontAwesomeIcon icon={faBolt} className="" />
        </button>
    </Navbar>
  );
}

export default NavbarSecondary;
