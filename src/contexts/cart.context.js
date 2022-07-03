import React, { createContext, useState } from 'react';

export const CartContext = createContext({
	isCartOpen: null,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {}
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	
	const getMaxCartProductOrder = () => {
		const orders = cartItems.map(item => item.order);
		
		return orders.length ? Math.max(...orders) : 0;
	};
	
	const addItemToCart = (productToAdd) => {
			setCartItems(productsInCart => {
				const foundProductInCart = productsInCart.find(productInCart => productInCart.id === productToAdd.id);
				
				if(foundProductInCart) {
					const foundProductInCartWithIncreaseQuantity = {...foundProductInCart};
					foundProductInCartWithIncreaseQuantity.quantity += 1;
					
					productsInCart = productsInCart.filter(productInCart => productInCart.id !== foundProductInCart.id);
					setCartItems([...productsInCart, foundProductInCartWithIncreaseQuantity]);
				} else {
					const newProductToAdd = {
						...productToAdd,
						quantity: 1,
						order: getMaxCartProductOrder() + 1
					};
					
					setCartItems([...productsInCart, newProductToAdd]);
				}
			})
	};
	
	const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart };
	
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};