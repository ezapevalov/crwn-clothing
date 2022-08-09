import React from 'react'

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
	selectCartCount,
	selectIsCartOpen
} from '../../../store/cart/cart.selector'
import { setIsCartOpen } from '../../../store/cart/cart.action'

import './cart-icon.style.scss'
import { ReactComponent as CartIconSVG } from '../../../assets/shopping-bag.svg'

const CartIcon = () => {
	const dispatch = useDispatch();
	const cartCount = useSelector(selectCartCount);
	const isCartOpen = useSelector(selectIsCartOpen);
	
	const toggleCartDropdown = () => {
		dispatch(setIsCartOpen(!isCartOpen));
	};
	
	return (
		<div className="cart-icon-container" onClick={toggleCartDropdown}>
			<CartIconSVG className="shopping-icon" />
			<span className="item-count">{cartCount}</span>
		</div>
	);
};

export default CartIcon;