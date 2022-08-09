import React, { createContext, useReducer } from 'react';

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	toggleIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	incrementProductQuantity: () => {},
	decrementProductQuantity: () => {},
	removeProduct: () => {}
});

const CART_INITIAL_STATE = {
	isCartOpen: false,
	cartItems: [],
	cartCount: 0,
	cartTotal: 0
};

const cartReducer = (state, action) => {
	const { type, payload } = action;
	
	switch(type) {
		case 'SET_CART_ITEMS':
			return {
				...state,
				...payload
			};
		case 'TOGGLE_CART_IS_OPEN':
			return {
				...state,
				isCartOpen: !state.isCartOpen
			};
		case 'SET_CART_IS_OPEN':
			return {
				...state,
				isCartOpen: payload
			};
		default:
			throw new Error("cartReducer: unknown action");
	}
};

export const CartProvider = ({ children }) => {
	const [{isCartOpen, cartItems, cartCount, cartTotal}, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);
	
	const cartItemsDispatcher = newCartItems => {
		const newCartTotal = newCartItems.reduce((prev, current) => {
			return prev + current.quantity * current.price
		}, 0);
		const newCartCount = newCartItems.reduce((prev, current) => {
			return prev + current.quantity
		}, 0);
		
		dispatch({
			type: 'SET_CART_ITEMS',
			payload: {
				cartItems: newCartItems.sort((a,b) => a.order - b.order),
				cartTotal: newCartTotal,
				cartCount: newCartCount,
			}
		})
	};
	const toggleIsCartOpen = () => {
		dispatch({type: 'TOGGLE_CART_IS_OPEN'})
	};
	const setIsCartOpen = isOpen => {
		dispatch({type: 'SET_CART_IS_OPEN', payload: isOpen})
	};
	const getMaxOrder = () => {
		const ordersArray = cartItems.map(item => item.order);
		
		return ordersArray.length ? Math.max(...ordersArray) : 0;
	};
	const incrementProductQuantity = productID => {
		const product = cartItems.find(item => item.id === productID);
		
		const newCartItems = [
			...cartItems.filter(item => item.id !== productID),
			{
				...product,
				quantity: product.quantity + 1
			}
		];
		
		cartItemsDispatcher(newCartItems);
	};
	const decrementProductQuantity = productID => {
		const product = cartItems.find(item => item.id === productID);
		const decrementedQuantity = product.quantity - 1;
		
		if(decrementedQuantity === 0) return cartItems; // Quantity can't be less then 1
		
		const newCartItems = [
			...cartItems.filter(item => item.id !== productID),
			{
				...product,
				quantity: decrementedQuantity
			}
		];
		
		cartItemsDispatcher(newCartItems);
	};
	const removeProduct = productID => {
		const newCartItems = [
			...cartItems.filter(productInCart => productInCart.id !== productID)
		];
		
		cartItemsDispatcher(newCartItems);
	};
	const addItemToCart = productToAdd => {
		const productFoundInCart = cartItems.find(item => item.id === productToAdd.id);
		
		if(productFoundInCart) return incrementProductQuantity(productToAdd.id);
		
		const newCartItems = [
			...cartItems,
			{
				...productToAdd,
				quantity: 1,
				order: getMaxOrder() + 1
			}
		];
		
		cartItemsDispatcher(newCartItems);
	};
	
	const value = {
		isCartOpen,
		setIsCartOpen,
		toggleIsCartOpen,
		cartItems,
		cartCount,
		cartTotal,
		addItemToCart,
		incrementProductQuantity,
		decrementProductQuantity,
		removeProduct
	};
	
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};