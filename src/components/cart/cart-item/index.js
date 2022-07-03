import React from 'react'
import './cart-item.styles.scss'

const CartItem = ({ cartItem }) => {
	const { name, imageUrl, quantity, price } = cartItem;
	
	return (
		<div className="cart-item-container">
			<img src={imageUrl} alt={`${name}`} />
			<div className="item-details">
				<span className="item-details-name">{name}</span>
				<span className="item-details-price">{quantity} x ${price}</span>
			</div>
		</div>
	);
};

export default CartItem;