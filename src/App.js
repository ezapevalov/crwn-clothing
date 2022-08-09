import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from "react-router-dom";

import Layout from './components/layout'
import NotFound404 from './components/not-found-404'
import HomePage from './pages/homepage'
import ShopPage from './pages/shop'
import CategoryPage from './pages/category'
import SignIn from './pages/sign-in'
import SignUp from './pages/sign-up'
import Checkout from './pages/checkout'
import {
	createUserDocumentFromAuth,
	getCategoriesAndDocuments,
	onAuthStateChangedListener
} from "./utils/firebase";
import { setCurrentUser } from './store/user/user.action'
import { setCategories } from "./store/categories/categories.action";

function App() {
  const dispatch = useDispatch();
  
  // Authorize User
	useEffect(() => onAuthStateChangedListener(async (user) => {
		if(user) {
			await createUserDocumentFromAuth(user);
		}
		dispatch(setCurrentUser(user));
	}), [dispatch]);
	
	// Get Categories with products
	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoriesArray = await getCategoriesAndDocuments();
			
			console.log("categories response:", categoriesArray);
			
			dispatch(setCategories(categoriesArray));
		};
		
		getCategoriesMap();
	}, [dispatch]);
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="shop">
	        <Route index element={<ShopPage />} />
	        <Route path=":categoryName" element={<CategoryPage />} />
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
