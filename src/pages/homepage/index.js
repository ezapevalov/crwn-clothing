import React from 'react';
import './homepage.styles.scss'
import CategoryTile from '../../components/category/tile'

function HomePage() {
	return (
	  <div className="homepage">
		  <CategoryTile />
	  </div>
	);
}

export default HomePage;