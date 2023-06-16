import React from 'react'
import NotFound from '../../src/components/notFound/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppProvider from '../context/AppContext';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          {/* <Route path={"/"} element={} /> */}
          {/* <Route path={"login"} element={<Navigate to="/" />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  )
}

export default AppRouter;