import React, {useContext} from 'react'
import { CartContext } from '../../../contexts/cart.context'
import './cart-icon.style.scss'
import { ReactComponent as CartIconSVG } from '../../../assets/shopping-bag.svg'

const CartIcon = () => {
	const { setIsCartOpen } = useContext(CartContext);
	
	const toggleCartDropdown = () => {
		setIsCartOpen(currentlyOpen => !currentlyOpen)
	};
	
	return (
		<div className="cart-icon-container" onClick={toggleCartDropdown}>
			<CartIconSVG className="shopping-icon" />
			<span className="item-count">42</span>
		</div>
	);
};

export default CartIcon;