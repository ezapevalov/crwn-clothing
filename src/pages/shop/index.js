import React  from 'react';
import { useSelector } from 'react-redux';
import './shop_page.styles.scss'
import ProductCard from "../../components/products/product-card";
import {selectCategoriesMap} from '../../store/categories/categories.selector'
import { Link } from 'react-router-dom';

function ShopPage() {
	const categoriesMap = useSelector(selectCategoriesMap);
	
	return (
	  <div className="shop-page">
		  <h1>Shop Page</h1>
		  
		  {
		  	Object.keys(categoriesMap).map(categoryTitle => (
		  	  <React.Fragment key={categoryTitle}>
					  <h2>
						  <Link to={categoryTitle} className="category-title">{categoryTitle.toUpperCase()}</Link>
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