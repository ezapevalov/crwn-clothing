import React from 'react'
import { withRouter } from 'react-router-dom'

import './item.scss'

function CategoryItem(props) {
	const { title, imageUrl, categoryPageUrl, size, history } = props;
	
	function handleCategoryItemClick() {
		history.push(categoryPageUrl);
	}
	
	return (
	  <div className={`category-item ${size}`} onClick={handleCategoryItemClick}>
		  <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}} />
		  <div className="content">
			  <h1 className="title">{title.toUpperCase()}</h1>
			  <span className="subtitle">SHOP NOW</span>
		  </div>
	  </div>
	);
}

export default withRouter(CategoryItem)