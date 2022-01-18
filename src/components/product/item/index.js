import React from 'react'
import './item.scss'

function ProductItem(props) {
	const { title, imageUrl, size } = props;
	
	return (
	  <div className={`product-item ${size}`}>
		  <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}}></div>
		  <div className="content">
			  <h1 className="title">{title.toUpperCase()}</h1>
			  <span className="subtitle">SHOP NOW</span>
		  </div>
	  </div>
	);
}

export default ProductItem