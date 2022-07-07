import React, { useContext } from 'react';

import './shop_page.styles.scss'
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/products/product-card";

function ShopPage() {
	const { categoriesMap } = useContext(CategoriesContext);
	
	return (
	  <div className="shop-page">
		  <h1>Shop Page</h1>
		  
		  {
		  	Object.keys(categoriesMap).map(categoryTitle => (
		  	  <React.Fragment key={categoryTitle}>
					  <h2>
						  <span className="category-title">{categoryTitle.toUpperCase()}</span>
						</h2>
					  <div className="products-container">
						  {categoriesMap[categoryTitle]
							  .filter((e,i) => i < 4)
							  .map(product => {
								  return (
									  <ProductCard key={product.id} product={product} />
								  );
							  })}
					  </div>
				  </React.Fragment>
			  ))
		  }
		  
	  </div>
	);
}

export default ShopPage;