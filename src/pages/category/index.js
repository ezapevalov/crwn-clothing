import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {  useSelector } from 'react-redux';

import './category.styles.scss'
import {
	selectCategoriesMap,
	selectCategoriesIsLoading
} from '../../store/categories/categories.selector'
import ProductCard from "../../components/products/product-card";
import SpinnerCircleGrey from "../../components/spinner/circle-grey";

function CategoryPage() {
	const { categoryName } = useParams();
	const categoriesIsLoading = useSelector(selectCategoriesIsLoading);
	const categoriesMap = useSelector(selectCategoriesMap);
	const [products, setProducts] = useState([]);
	
	useEffect(() => {
		setProducts(categoriesMap[categoryName])
	}, [categoryName, categoriesMap]);
	
	if(categoriesIsLoading) return <SpinnerCircleGrey />;
	
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