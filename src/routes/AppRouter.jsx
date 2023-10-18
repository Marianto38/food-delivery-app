import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import Login from "../pages/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth, dataBase } from "../firebase/firebaseConfig";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { loginActionSync } from "../redux/actions/userActions";
import StepersLogin from '../components/stepersLogin/StepersLogin';
import DashboardRouter from './DashboardRouter';
import NotFound from '../../src/components/notFound/NotFound';
import { doc, getDoc } from "firebase/firestore";

import Cart from "../pages/cart/Cart";
import Home from "../pages/Home";
import Layout from "../components/layout/Layout";
import AllProducts from "../pages/allProducts/AllProducts";
import Favorites from "../pages/favorites/Favorites";




const AppRouter = () => {


  return (
    <BrowserRouter>
      <Routes>
      <Route element={<Layout />}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/carrito"} element={<Cart />} />
          <Route path={"catalogo"} element={<AllProducts />} />
          <Route path={"favoritos"} element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;




// import React, { useEffect, useState } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Register from "../pages/Register";
// import PublicRouter from "./PublicRouter";
// import PrivateRouter from "./PrivateRouter";
// import Login from "../pages/Login";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, dataBase } from "../firebase/firebaseConfig";
// import Spinner from "react-bootstrap/Spinner";
// import { useDispatch, useSelector } from "react-redux";
// import { loginActionSync } from "../redux/actions/userActions";
// import StepersLogin from '../components/stepersLogin/StepersLogin';
// import DashboardRouter from './DashboardRouter';
// import NotFound from '../../src/components/notFound/NotFound';
// import { doc, getDoc } from "firebase/firestore";
// import { Layout } from "antd";
// import Cart from "../pages/Cart";
// import { Home } from "@mui/icons-material";


// const AppRouter = () => {
//   const [loading, setLoading] = useState(true);
//   const [isLoggedIn, setIsLoggedIn] = useState(null);

//   const dispatch = useDispatch();

//   const { user } = useSelector((store) => store.user);
//   console.log(user);

//   console.log(auth)

//   // useEffect(() => {
//   //   onAuthStateChanged(auth, (userLogged) => {
//   //     if (userLogged?.uid) {
//   //       setIsLoggedIn(true);

//   //       if (!Object.entries(user).length) {
//   //         console.log("No hay info");
//   //         const db = dataBase; // Asigna 'dataBase' a 'db'

//   //         // Obtener referencia al documento del usuario en Firestore
//   //         const userDocRef = doc(db, 'users', userLogged.uid);

//   //         // Obtener los datos del documento del usuario
//   //         getDoc(userDocRef)
//   //           .then((docSnap) => {
//   //             if (docSnap.exists()) {
//   //               const userData = docSnap.data();

//   //               // Obtener phone y birthday del documento del usuario
//   //               const { phone, birthday } = userData;

//   //               const logged = {
//   //                 email: userLogged.auth.currentUser.email,
//   //                 fullName: userLogged.auth.currentUser.displayName,
//   //                 avatar: userLogged.auth.currentUser.photoURL,
//   //                 accessToken: userLogged.auth.currentUser.accessToken,
//   //                 phone: phone, // Agregar el valor de phone
//   //                 birthday: birthday, // Agregar el valor de birthday
//   //               };
//   //               dispatch(loginActionSync(logged));
//   //             }
//   //           })
//   //           .catch((error) => {
//   //             console.error("Error al obtener los datos del usuario:", error);
//   //           });
//   //       }

//   //       console.log(userLogged);
//   //     } else {
//   //       setIsLoggedIn(false);
//   //     }

//   //     setLoading(false);
//   //   });
//   // }, [user, dispatch]);
//   useEffect(() => {
//     onAuthStateChanged(auth, (userLogged) => {
//       if (userLogged?.uid) {
//         setIsLoggedIn(true);

//         const db = dataBase; // Asigna 'dataBase' a 'db'

//         // Obtener referencia al documento del usuario en Firestore
//         const userDocRef = doc(db, 'users', userLogged.uid);

//         // Obtener los datos del documento del usuario
//         getDoc(userDocRef)
//           .then((docSnap) => {
//             if (docSnap.exists()) {
//               const userData = docSnap.data();

//               // Obtener phone y birthday del documento del usuario
//               const { phone, birthday } = userData;

//               const logged = {
//                 email: userLogged.auth.currentUser.email,
//                 fullName: userLogged.auth.currentUser.displayName,
//                 avatar: userLogged.auth.currentUser.photoURL,
//                 accessToken: userLogged.auth.currentUser.accessToken,
//                 phone: phone,
//                 birthday: birthday,
//               };
//               dispatch(loginActionSync(logged));
//             } else {
//               // No se encontró el documento del usuario en Firestore
//               // Aquí puedes decidir cómo manejar esta situación
//             }
//           })
//           .catch((error) => {
//             console.error("Error al obtener los datos del usuario:", error);
//           });
//       } else {
//         setIsLoggedIn(false);
//       }

//       setLoading(false);
//     });
//   }, [user, dispatch]);


//   if (loading) {
//     return <Spinner animation="grow" />;
//   }


//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* <Route element={<PublicRouter isAutentication={isLoggedIn} />}>
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//            <Route path="/" element={<StepersLogin />} /> 
//         </Route> */}

//         <Route element={<Layout />}>
//           <Route path={"/"} element={<Home />} />
//           <Route path={"/carrito"} element={<Cart />} />
//           <Route path="*" element={<NotFound />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }

//export default AppRouter;
