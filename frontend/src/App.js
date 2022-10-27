import React from 'react';
import { BrowserRouter, Route, Routes, useRoutes } from 'react-router-dom';
import { NavBar } from './components';
import { CartScreen, HomeScreen, ProductScreen } from './screens';

const ShoppingCartRoutes = () =>
  useRoutes([
    { path: '/cart', element: <CartScreen /> },
    { path: '/cart/:id', element: <CartScreen /> },
  ]);

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <ShoppingCartRoutes />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/products/:id" element={<ProductScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
