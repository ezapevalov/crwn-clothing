import { CATEGORIES_ACTION_TYPES } from './categories.action-types'
import { getCategoriesAndDocuments } from "../../utils/firebase";

export const fetchCategoriesStart = () => ({
	type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START
});

export const fetchCategoriesSuccess = categoriesArray => ({
	type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
	payload: categoriesArray
});

export const fetchCategoriesFailed = (error) => ({
	type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
	payload: error
});

export const fetchCategoriesAsync = () => async (dispatch) => {
	dispatch(fetchCategoriesStart());
	
	try {
		const categoriesArray = await getCategoriesAndDocuments();
		
		dispatch(fetchCategoriesSuccess(categoriesArray));
	} catch (error) {
		dispatch(fetchCategoriesFailed(error));
	}
};