import React from 'react';
import { Routes, Route } from "react-router-dom";

import Layout from './components/layout'
import NotFound404 from './components/not-found-404'
import HomePage from './pages/homepage'
import ShopPage from './pages/shop'
import CategoryPage from './pages/category'
import SignIn from './pages/sign-in'
import SignUp from './pages/sign-up'
import Checkout from './pages/checkout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="shop">
	        <Route index element={<ShopPage />} />
	        <Route path=":category" element={<CategoryPage />} />
        </Route>
        <Route path="checkout" element={<Checkout />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      
        <Route path="*" element={<NotFound404 />} />
      </Route>
    </Routes>
  );
}

export default App;
