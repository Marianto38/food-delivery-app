import React from 'react'
//import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'
import NavbarPrincipal from '../navbar/navbarPrincipal/NavbarPrincipal'

const Layout = () => {
  return (
    <>
      <NavbarPrincipal />
      <Outlet />
    </>
  )
}

export default Layout