import React, { createContext, useState, useEffect } from 'react'
import { getCategoriesAndDocuments } from '../utils/firebase'

export const CategoriesContext = createContext({
	categoriesMap: {}
});

export const CategoriesProvider = ({children}) => {
	const [categoriesMap, setCategoriesMap] = useState({});
	const value = {categoriesMap};
	
	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoriesMapResponse = await getCategoriesAndDocuments();
			
			setCategoriesMap(categoriesMapResponse);
		};
		
		getCategoriesMap();
	}, []);
	
	return (
		<CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
	);
};