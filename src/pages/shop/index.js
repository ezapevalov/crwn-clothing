import React, { useContext } from 'react';

import './shop_page.styles.scss'
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/products/product-card";

//import CategoryTile from '../../components/category/tile'

function ShopPage() {
	const { products } = useContext(ProductsContext);
	
	return (
	  <div className="shop-page">
		  <h1>Shop Page</h1>
		  
		  <div className="products-container">
			  {products.map(product => {
				  return (
					  <ProductCard key={product.id} product={product} />
				  );
			  })}
		  </div>
		  
		  {/*<CategoryTile />*/}
	  </div>
	);
}

export default ShopPage;