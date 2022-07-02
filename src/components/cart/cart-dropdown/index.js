import React from 'react'
import BlackAndWhiteButton from '../../buttons/black-and-white'
import './cart-dropdown.styles.scss'

const CartDropdown = () => {
	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">&nbsp;</div>
			<BlackAndWhiteButton>Checkout</BlackAndWhiteButton>
		</div>
	);
};

export default CartDropdown;