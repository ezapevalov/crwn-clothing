import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectCartItems } from '../../../store/cart/cart.selector'
import { setIsCartOpen } from '../../../store/cart/cart.action'

import BlackAndWhiteButton from '../../buttons/black-and-white'
import CartItem from './../cart-item'
import './cart-dropdown.styles.scss'

const CartDropdown = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);
	const navigate = useNavigate();

	const goToCheckoutHandler = (event) => {
		event.preventDefault();
		dispatch(setIsCartOpen(false));
		navigate('/checkout');
	};
	
	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.map(cartItem => {
					return <CartItem key={cartItem.id} cartItem={cartItem} />
				})}
			</div>
			<BlackAndWhiteButton onClick={goToCheckoutHandler}>Checkout</BlackAndWhiteButton>
		</div>
	);
};

export default CartDropdown;