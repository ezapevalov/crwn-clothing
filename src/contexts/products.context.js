import React, { createContext, useState } from 'react'
import SOME_PRODUCTS from '../data/some_products'

export const ProductsContext = createContext({
	products: []
});

export const ProductsProvider = ({children}) => {
	const [products, setProducts] = useState(SOME_PRODUCTS);
	const value = {products};
	
	return (
		<ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
	);
};