import React from 'react'
import { useNavigate } from "react-router-dom";

import './item.scss'

function CategoryItem(props) {
	const { title, imageUrl, categoryPageUrl, size } = props;
	let navigate  = useNavigate();
	
	function handleCategoryItemClick() {
		navigate(categoryPageUrl, { replace: true });
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

export default CategoryItem