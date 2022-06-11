import React, { useState } from 'react'
import './tile.scss'
import CATEGORIES_WITH_PRODUCTS from '../../../data/categories_with_products'
import CategoryItem from '../item'

function CategoryTile() {
	const [categories, setCategories] = useState(CATEGORIES_WITH_PRODUCTS);
	
	return (
	  <div className="category-tile">
		  {categories.map(category => {
		  	return <CategoryItem key={category.id} {...category} />
		  })}
	  </div>
	);
}

export default CategoryTile