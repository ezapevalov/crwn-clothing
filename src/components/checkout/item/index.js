import React from 'react'
import './checkout-item.styles.scss'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../../../store/cart/cart.selector'
import {
	incrementCartItemQuantity,
	decrementCartItemQuantity,
	removeItemFromCart
} from '../../../store/cart/cart.action'

const CheckoutItem = ({cartItem}) => {
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);
	const {id, imageUrl, name, price, quantity} = cartItem;
	
	const handleDecrement = () => dispatch(decrementCartItemQuantity(cartItems, id));
	const handleIncrement = () => dispatch(incrementCartItemQuantity(cartItems, id));
	const handleRemove = () => dispatch(removeItemFromCart(cartItems, id));
	
	return <div className="checkout-item-container">
		<div className="image-container">
			<img src={imageUrl} alt={`${name}`} />
		</div>
		<span className="name">{name}</span>
		<span className="quantity">
			<div onClick={handleDecrement} className="arrow">&#10094;</div>
			<div className="value">{quantity}</div>
			<div onClick={handleIncrement} className="arrow">&#10095;</div>
		</span>
		<span className="price">${price}</span>
		<div className="remove-button" onClick={handleRemove}>&#10005;</div>
	</div>
};

export default CheckoutItem;