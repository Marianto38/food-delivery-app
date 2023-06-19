// import React from 'react'

// const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home
import React from "react";
import { useDispatch, useSelector } from "react-redux";
//import { logoutActionAsync } from "../redux/actions/userActions";
import Image from "react-bootstrap/Image";
import { logoutActionAsync } from "../redux/actions/userActions";

const Home = () => {
  const dispatch = useDispatch();

  const { user}   = useSelector((store) => store.user);
  console.log(user?.fullName);

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
    </div>
  );
};

export default Home;
