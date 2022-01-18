import React from 'react';
import './homepage.styles.scss'
import ProductTile from '../../components/product/tile'

function HomePage() {
	return (
	  <div className="homepage">
		  <ProductTile/>
	  </div>
	);
}

export default HomePage;