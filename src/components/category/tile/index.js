import React, { useState } from 'react'
import './tile.scss'
import CategoryItem from '../item'

function CategoryTile() {
	const categoriesData = [
		{
			title: 'hats',
			imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
			size: '',
			id: 1,
			categoryPageUrl: '/shop/hats'
		},
		{
			title: 'jackets',
			imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
			size: '',
			id: 2,
			categoryPageUrl: '/shop/jackets'
		},
		{
			title: 'sneakers',
			imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
			size: '',
			id: 3,
			categoryPageUrl: '/shop/sneakers'
		},
		{
			title: 'womens',
			imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
			size: 'large',
			id: 4,
			categoryPageUrl: '/shop/womens'
		},
		{
			title: 'mens',
			imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
			size: 'large',
			id: 5,
			categoryPageUrl: '/shop/mens'
		}
	];
	const [categories, setCategories] = useState(categoriesData);
	
	return (
	  <div className="category-tile">
		  {categories.map(category => {
		  	return <CategoryItem key={category.id} {...category} />
		  })}
	  </div>
	);
}

export default CategoryTile