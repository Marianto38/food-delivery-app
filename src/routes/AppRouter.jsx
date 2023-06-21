// import React, { useEffect, useState } from 'react'
// import NotFound from '../../src/components/notFound/NotFound';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import PublicRouter from './PublicRouter';
// import Register from '../pages/Register';
// import Login from '../pages/Login';
// import DashboardRouter from './DashboardRouter';
// import PrivateRouter from './PrivateRouter';
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from '../firebase/firebaseConfig';
// import StepersLogin from '../components/stepersLogin/StepersLogin';

// const AppRouter = () => {
//   const [cheking, setCheking] = useState(true);
//   const [isLoggedIn, setIsLoggedIn] = useState(undefined);

//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user?.uid) {
//         setIsLoggedIn(true);

//       } else {
//         setIsLoggedIn(false);
//       }
//       setCheking(false);
//     });
//   }, [setIsLoggedIn, setCheking]);

// import React, { useEffect, useState } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Register from "../pages/Register";
// import PublicRouter from "./PublicRouter";
// import PrivateRouter from "./PrivateRouter";
// //import Layout from "../components/Layout";
// import Login from "../pages/Login";
// //import Home from "../pages/Home";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../firebase/firebaseConfig";
// import Spinner from "react-bootstrap/Spinner";
// import { useDispatch, useSelector } from "react-redux";
// import { loginActionSync } from "../redux/actions/userActions";
// import StepersLogin from '../components/stepersLogin/StepersLogin';
// import DashboardRouter from './DashboardRouter';
// import NotFound from '../../src/components/notFound/NotFound';

// const AppRouter = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const dispatch = useDispatch();

//   const { user } = useSelector((store) => store.user);
//   console.log(user);

//   useEffect(() => {
//     onAuthStateChanged(auth, (userLogged) => {
//       if (userLogged?.uid) {
//         setIsLoggedIn(true);

//         if (!Object.entries(user).length) {
//           console.log("No hay info");
//           const logged = {
//             email: userLogged.auth.currentUser.email,
//             fullName: userLogged.auth.currentUser.displayName,
//             avatar: userLogged.auth.currentUser.photoURL,
//             accessToken: userLogged.auth.currentUser.accessToken,
//             phone: user.phone,
//             birthday: user.birthday,
//           };
//           dispatch(loginActionSync(logged));
//         }
//         console.log(userLogged);
//       } else {
//         setIsLoggedIn(false);
//       }

//       setLoading(false);
//     });
//   }, [user, dispatch]);

//   if (loading) {
//     return <Spinner animation="grow" />;
//   }


//   // if (cheking) {
//   //   return <h1>Espere....</h1>;
//   // }
//   return (
//     <BrowserRouter>
//      <Routes>
//         <Route element={<PublicRouter isAutentication={isLoggedIn} />}>
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/" element={<StepersLogin />} />
//         </Route>
//         <Route element={<PrivateRouter isAutentication={isLoggedIn} />}>
//           <Route path="/*" element={<DashboardRouter />} />
//           <Route path="*" element={<NotFound />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default AppRouter;


import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
//import Layout from "../components/Layout";
import Login from "../pages/Login";
//import Home from "../pages/Home";
import { onAuthStateChanged } from "firebase/auth";
import { auth, dataBase } from "../firebase/firebaseConfig";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { loginActionSync } from "../redux/actions/userActions";
import StepersLogin from '../components/stepersLogin/StepersLogin';
import DashboardRouter from './DashboardRouter';
import NotFound from '../../src/components/notFound/NotFound';
import { doc, getDoc } from "firebase/firestore";


const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.user);
  console.log(user);

  useEffect(() => {
    onAuthStateChanged(auth, (userLogged) => {
      if (userLogged?.uid) {
        setIsLoggedIn(true);
  
        if (!Object.entries(user).length) {
          console.log("No hay info");
          const db = dataBase; // Asigna 'dataBase' a 'db'
  
          // Obtener referencia al documento del usuario en Firestore
          const userDocRef = doc(db, 'users', userLogged.uid);
  
          // Obtener los datos del documento del usuario
          getDoc(userDocRef)
            .then((docSnap) => {
              if (docSnap.exists()) {
                const userData = docSnap.data();
  
                // Obtener phone y birthday del documento del usuario
                const { phone, birthday } = userData;
  
                const logged = {
                  email: userLogged.auth.currentUser.email,
                  fullName: userLogged.auth.currentUser.displayName,
                  avatar: userLogged.auth.currentUser.photoURL,
                  accessToken: userLogged.auth.currentUser.accessToken,
                  phone: phone, // Agregar el valor de phone
                  birthday: birthday, // Agregar el valor de birthday
                };
                dispatch(loginActionSync(logged));
              }
            })
            .catch((error) => {
              console.error("Error al obtener los datos del usuario:", error);
            });
        }
  
        console.log(userLogged);
      } else {
        setIsLoggedIn(false);
      }
  
      setLoading(false);
    });
  }, [user, dispatch]);
  

  if (loading) {
    return <Spinner animation="grow" />;
  }


  return (
    <BrowserRouter>
     <Routes>
        <Route element={<PublicRouter isAutentication={isLoggedIn} />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<StepersLogin />} />
        </Route>
        <Route element={<PrivateRouter isAutentication={isLoggedIn} />}>
          <Route path="/*" element={<DashboardRouter />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;
