import data from '../assets/data'
import { FETCH_DATA, DATA_LOADING, GRID_ROW_COUNTER, SORTING_BY, CHANGE_LANGUAGE, SEARCH_BY, CHANGE_DATA_DISPLAY, INIT_FAVOURITES, REMOVE_FAVOURITE, ADD_FAVOURITE, TOGGLE_FAVOURITE_PROPERTY } from './types';

const fetchedData = new Promise((resolve) => {
	setTimeout(() => {
		resolve(data)
	}, 500)
})


export function showLoader() {
	return {
		type: DATA_LOADING
	}
}


export function changeDataDisplay(type) {
	return {
		type: CHANGE_DATA_DISPLAY,
		payload: {
			viewType: type
		}
	}
}
export function gridRowCounter() {
	return {
		type: GRID_ROW_COUNTER
	}
}
export const sortingBy = (type, order = 'asc') => {
	return {
		type: SORTING_BY,
		payload: {
			sortingType: type,
			sortingOrder: order
		}
	}
}

export const changeLanguage = lang => {
	return {
		type: CHANGE_LANGUAGE,
		payload: lang
	}
}
export const searchBy = string => {
	return {
		type: SEARCH_BY,
		payload: {
			searchString: string
		}
	}
}
export const toggleFavouriteProperty = (id, value) => {
	return {
		type: TOGGLE_FAVOURITE_PROPERTY,
		payload: {
			id,
			value
		}
	}
}
export const addFavourite = data => dispatch => {

	dispatch({type: ADD_FAVOURITE,payload: data})
	dispatch(toggleFavouriteProperty(data.id, true))

}
export const removeFavourite = id => dispatch => {

	dispatch(toggleFavouriteProperty(id, false))
	dispatch({type: REMOVE_FAVOURITE,payload: id})
	
}

export const fetchData = () => dispatch => {
	dispatch(showLoader())
	fetchedData
		.then(data => {
			dispatch({type: FETCH_DATA, payload: data})
			let favourites = data.filter(item => item.favourite)
			dispatch({type: INIT_FAVOURITES, payload: favourites})
		})
}
