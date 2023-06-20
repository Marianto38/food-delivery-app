import React, { useEffect, useState } from 'react'
import NotFound from '../../src/components/notFound/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PublicRouter from './PublicRouter';
import Register from '../pages/Register';
import Login from '../pages/Login';
import DashboardRouter from './DashboardRouter';
import PrivateRouter from './PrivateRouter';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/firebaseConfig';
import StepersLogin from '../components/stepersLogin/StepersLogin';

const AppRouter = () => {
  const [cheking, setCheking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedIn(true);

      } else {
        setIsLoggedIn(false);
      }
      setCheking(false);
    });
  }, [setIsLoggedIn, setCheking]);

  if (cheking) {
    return <h1>Espere....</h1>;
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