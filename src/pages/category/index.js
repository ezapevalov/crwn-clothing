import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {  useSelector } from 'react-redux';

import './category.styles.scss'
import {selectCategoriesMap} from '../../store/categories/categories.selector'
import ProductCard from "../../components/products/product-card";

function CategoryPage() {
	const { categoryName } = useParams();
	const categoriesMap = useSelector(selectCategoriesMap);
	const [products, setProducts] = useState([]);
	
	useEffect(() => {
		setProducts(categoriesMap[categoryName])
	}, [categoryName, categoriesMap]);
	
	return (
	  <div>
		  
		  <h2 className="category-title">{categoryName.toUpperCase()}</h2>
		  <div className="products-container">
			  {products && products.map(product => {
				  return (
					  <ProductCard key={product.id} product={product} />
				  );
			  })}
		  </div>
		  
	  </div>
	);
}

export default CategoryPage;