import React, {useContext} from 'react';
import { CartContext } from '../../contexts/cart.context'
import './product-card.styles.scss'
import BlackAndWhiteButton from '../buttons/black-and-white'

const ProductCard = ({product}) => {
	const {name, price, imageUrl} = product;
	const { addItemToCart } = useContext(CartContext);
	
	const addToCart = (event) => {
		event.preventDefault();
		
		addItemToCart(product);
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