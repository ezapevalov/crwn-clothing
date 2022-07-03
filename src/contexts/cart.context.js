import React, { createContext, useState } from 'react';

export const CartContext = createContext({
	isCartOpen: null,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	incrementProductQuantity: () => {},
	decrementProductQuantity: () => {},
	removeProduct: () => {}
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	
	const getMaxCartProductOrder = () => {
		const orders = cartItems.map(item => item.order);
		
		return orders.length ? Math.max(...orders) : 0;
	};
	const incrementProductQuantity = productID => {
		setCartItems(productsInCart => {
			const product = productsInCart.find(productInCart => productInCart.id === productID);
			
			productsInCart = productsInCart.filter(productInCart => productInCart.id !== productID);
			
			return [
				...productsInCart,
				{
					...product,
					quantity: product.quantity + 1
				}
			];
		})
	};
	const decrementProductQuantity = productID => {
		setCartItems(productsInCart => {
			const product = productsInCart.find(productInCart => productInCart.id === productID);
			const decrementedQuantity = product.quantity - 1;
			
			if(decrementedQuantity === 0) return productsInCart; // do nothing
			
			productsInCart = productsInCart.filter(productInCart => productInCart.id !== productID);
			
			return [
				...productsInCart,
				{
					...product,
					quantity: decrementedQuantity
				}
			];
		})
	};
	const removeProduct = productID => {
		setCartItems(productsInCart => {
			const filteredProducts = productsInCart.filter(productInCart => productInCart.id !== productID);
			
			return [
				...filteredProducts
			];
		})
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
					
					return [...productsInCart, newProductToAdd];
				}
			})
	};
	
	const value = {
		isCartOpen,
		setIsCartOpen,
		cartItems,
		addItemToCart,
		incrementProductQuantity,
		decrementProductQuantity,
		removeProduct
	};
	
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};