import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './category.styles.scss'
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/products/product-card";

function CategoryPage() {
	const { category } = useParams();
	const { categoriesMap } = useContext(CategoriesContext);
	const [products, setProducts] = useState([]);
	
	useEffect(() => {
		setProducts(categoriesMap[category])
	}, [category, categoriesMap]);
	
	return (
	  <div>
		  
		  <h2 className="category-title">{category.toUpperCase()}</h2>
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