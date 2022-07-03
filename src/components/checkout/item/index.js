import React, {useContext} from 'react'
import './checkout-item.styles.scss'
import {CartContext} from "../../../contexts/cart.context";

const CheckoutItem = ({cartItem}) => {
	const {
		incrementProductQuantity,
		decrementProductQuantity,
		removeProduct
	} = useContext(CartContext);
	
	const {id, imageUrl, name, price, quantity} = cartItem;
	
	const handleDecrement = () => decrementProductQuantity(id);
	const handleIncrement = () => incrementProductQuantity(id);
	const handleRemove = () => removeProduct(id);
	
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