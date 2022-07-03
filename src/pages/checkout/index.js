import React, {useContext} from 'react'
import { CartContext } from '../../contexts/cart.context'
import CheckoutItem from '../../components/checkout/item'
import './checkout.styles.scss'

const Checkout = () => {
	const { cartItems } = useContext(CartContext);
	const total = cartItems.reduce((prev, current) => {
		return prev + current.quantity * current.price
	}, 0);
	
	return (
		<div>
			<h1>Checkout page</h1>
			<div className="checkout-container">
				<div className="checkout-header">
					<div className="header-block"><span>Product</span></div>
					<div className="header-block"><span>Description</span></div>
					<div className="header-block"><span>Quantity</span></div>
					<div className="header-block"><span>Price</span></div>
					<div className="header-block"><span>Remove</span></div>
				</div>
				{
					cartItems
						.sort((a,b) => a.order - b.order)
						.map(cartItem => <CheckoutItem cartItem={cartItem} key={`checkout-cart-item-${cartItem.id}`} />)
				}
				<span className="total">Total: {total}</span>
			</div>
		</div>
	);
};

export default Checkout;