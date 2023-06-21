import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "react-bootstrap/Image";
import { logoutActionAsync } from "../redux/actions/userActions";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user}   = useSelector((store) => store.user);
  console.log(user);

  const handleToProfile = () => {
    navigate('/profile')
  }

  return (
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
  );
};

export default Home;
