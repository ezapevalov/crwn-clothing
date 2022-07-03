import React, {useContext} from 'react'
import BlackAndWhiteButton from '../../buttons/black-and-white'
import { CartContext } from '../../../contexts/cart.context'
import CartItem from './../cart-item'
import './cart-dropdown.styles.scss'

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);
	
	console.log(cartItems);
	
	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.sort((a,b) => a.order - b.order).map(cartItem => {
					return <CartItem key={cartItem.id} cartItem={cartItem} />
				})}
			</div>
			<BlackAndWhiteButton>Checkout</BlackAndWhiteButton>
		</div>
	);
};

export default CartDropdown;