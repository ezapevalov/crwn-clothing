import React, { useState } from 'react'
import './tile.scss'
import ProductItem from '../item'

function ProductTile() {
	const productsData = [
		{
			title: 'hats',
			imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
			size: '',
			id: 1,
			linkUrl: 'shop/hats'
		},
		{
			title: 'jackets',
			imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
			size: '',
			id: 2,
			linkUrl: 'shop/jackets'
		},
		{
			title: 'sneakers',
			imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
			size: '',
			id: 3,
			linkUrl: 'shop/sneakers'
		},
		{
			title: 'womens',
			imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
			size: 'large',
			id: 4,
			linkUrl: 'shop/womens'
		},
		{
			title: 'mens',
			imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
			size: 'large',
			id: 5,
			linkUrl: 'shop/mens'
		}
	];
	const [products, setProducts] = useState(productsData);
	
	return (
	  <div className="product-tile">
		  {products.map(product => {
		  	return <ProductItem key={product.id}
		                        id={product.id}
		                        title={product.title}
		                        size={product.size}
		                        imageUrl={product.imageUrl}
		                        linkUrl={product.linkUrl}
		    />
		  })}
	  </div>
	);
}

export default ProductTile