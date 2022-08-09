import React from 'react'
import { useSelector } from 'react-redux'
import {
	selectCartItems,
	selectCartTotal
} from '../../store/cart/cart.selector'
import CheckoutItem from '../../components/checkout/item'
import './checkout.styles.scss'

const Checkout = () => {
	const cartItems = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);
	
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
					cartItems.map(item => (
						<CheckoutItem cartItem={item} key={item.id} />
					))
				}
				<span className="total">Total: ${cartTotal}</span>
			</div>
		</div>
	);
};

export default Checkout;