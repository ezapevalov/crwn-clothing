import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector'
import './product-card.styles.scss'
import BlackAndWhiteButton from '../buttons/black-and-white'

const ProductCard = ({product}) => {
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);
	const {name, price, imageUrl} = product;
	
	const addToCart = (event) => {
		event.preventDefault();
		
		dispatch(addItemToCart(cartItems, product));
	};
	
	return (
		<div className="product-card-container">
			<img src={imageUrl} alt={`${name}`}/>
			<div className="footer">
				<span className="name">{name}</span>
				<span className="price">${price}</span>
			</div>
			<BlackAndWhiteButton onClick={addToCart} buttonType="inverted">Add to cart</BlackAndWhiteButton>
		</div>
	);
};

export default ProductCard;