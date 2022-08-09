import { CART_ACTION_TYPES } from './cart.action-types'

const getMaxOrder = (cartItems) => {
	const ordersArray = cartItems.map(item => item.order);
	
	return ordersArray.length ? Math.max(...ordersArray) : 0;
};

export const setIsCartOpen = isCartOpen => (
	{
		type: CART_ACTION_TYPES.SET_CART_IS_OPEN,
		payload: isCartOpen
	}
);

export const setCartItems = cartItems => (
	{
		type: CART_ACTION_TYPES.SET_CART_ITEMS,
		payload: cartItems
	}
);

export const incrementCartItemQuantity = (cartItems, productID) => {
	const newCartItems = cartItems.map(cartItem => {
		const copiedItem = {...cartItem};
		
		if(copiedItem.id === productID) copiedItem.quantity += 1;
		
		return copiedItem;
	});
	
	return {
		type: CART_ACTION_TYPES.SET_CART_ITEMS,
		payload: newCartItems
	}
};

export const decrementCartItemQuantity = (cartItems, productID) => {
	const newCartItems = cartItems.map(cartItem => {
		const copiedItem = {...cartItem};
		
		if(copiedItem.id === productID && copiedItem.quantity > 1) copiedItem.quantity -= 1;
		
		return copiedItem;
	});
	
	return {
		type: CART_ACTION_TYPES.SET_CART_ITEMS,
		payload: newCartItems.filter(item => item.quantity > 0)
	}
};

export const removeItemFromCart = (cartItems, productID) => {
	const newCartItems = [
		...cartItems.filter(productInCart => productInCart.id !== productID)
	];
	
	return {
		type: CART_ACTION_TYPES.SET_CART_ITEMS,
		payload: newCartItems
	}
};

export const addItemToCart = (cartItems, productToAdd) => {
	const productFoundInCart = cartItems.find(item => item.id === productToAdd.id);
	
	if(productFoundInCart) return incrementCartItemQuantity(cartItems, productToAdd.id);
	
	const newCartItems = [
		...cartItems,
		{
			...productToAdd,
			quantity: 1,
			order: getMaxOrder(cartItems) + 1
		}
	];
	
	return {
		type: CART_ACTION_TYPES.SET_CART_ITEMS,
		payload: newCartItems
	}
};



