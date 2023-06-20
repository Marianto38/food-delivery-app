import React from "react";
import IconHome from "../../../assets/icons/home.png";
import IconSearch from "../../../assets/icons/search.png";
import IconOrder from "../../../assets/icons/order.png";
import IconProfile from "../../../assets/icons/profile.png";
import "./styleFooter.scss";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleToHome = () => {
    navigate("/home");
  };
  const handleToSearch = () => {
    navigate("/search");
  };
  const handleToOrders = () => {
    navigate("/ordershistory");
  };
  const handleToProfile = () => {
    navigate("/profile");
  };
  return (
    <div className="footer">
      <figure onClick={handleToHome} className="footer__home">
        <img src={IconHome} alt="Icono home" />
      </figure>
      <figure onClick={handleToSearch} className="footer__search">
        <img src={IconSearch} alt="Icono search" />
      </figure>
      <figure onClick={handleToOrders} className="footer__order">
        <img src={IconOrder} alt="Icono order" />
      </figure>
      <figure onClick={handleToProfile} className="footer__profile">
        <img src={IconProfile} alt="Icono profile" />
      </figure>
    </div>
  );
};

export default Footer;
