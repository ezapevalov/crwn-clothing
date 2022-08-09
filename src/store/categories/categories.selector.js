import { createSelector } from 'reselect'

const selectCategoryReducer = state => state.categories;

export const selectCategories = createSelector(
	[selectCategoryReducer],
	categoriesReducer => categoriesReducer.categories
);

export const selectCategoriesMap = createSelector(
	selectCategories,
	categories =>
		categories.reduce((accumulator, category) => {
			const {title, items} = category;
			accumulator[title.toLowerCase()] = items;
			return accumulator;
		}, {})
);