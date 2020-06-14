import { createSelector } from "reselect";
import { sortingByType, fuseSearch } from "../helpers/functions";

const getUsers = state => state.users.data 
const getFavourites = state => state.favourites.data
const getSorting = state => state.app.sorting
const getSearch = state => state.app.searchString

export const sortAndFilter = createSelector(
	[getUsers, getSorting, getSearch],
	(users, {sortingType, sortingOrder}, searchString) => {
		
		let data = sortingByType(users, sortingType);

		if (sortingOrder === 'desc') {
			data.reverse()
		}
		if(searchString){	
			data = fuseSearch(data, searchString)
		}

		return data;
	}
  )
export const sortAndFilterFavourites = createSelector(
	[getFavourites, getSorting,getSearch],
	(users, {sortingType, sortingOrder}, searchString) => {
		
		let data = sortingByType(users, sortingType);

		if (sortingOrder === 'desc') {
			data.reverse()
		}
		if(searchString){	
			data = fuseSearch(data, searchString)
		}

		return data;
	}
  )