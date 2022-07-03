import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import BlackAndWhiteButton from '../../buttons/black-and-white'
import { CartContext } from '../../../contexts/cart.context'
import CartItem from './../cart-item'
import './cart-dropdown.styles.scss'

const CartDropdown = () => {
	const { cartItems, setIsCartOpen } = useContext(CartContext);
	const navigate = useNavigate();

	const goToCheckoutHandler = (event) => {
		event.preventDefault();
		setIsCartOpen(false);
		navigate('/checkout');
	};
	
	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.sort((a,b) => a.order - b.order).map(cartItem => {
					return <CartItem key={cartItem.id} cartItem={cartItem} />
				})}
			</div>
			<BlackAndWhiteButton onClick={goToCheckoutHandler}>Checkout</BlackAndWhiteButton>
		</div>
	);
};

export default CartDropdown;