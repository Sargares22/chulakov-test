import { createSelector } from "reselect";
import Fuse from "fuse.js";

const getUsers = state => state.users.data
const getSorting = state => state.app.sorting
const getSearch = state => state.app.searchedString

export const sortAndFilter = createSelector(
	[getUsers, getSorting,getSearch],
	(users, {sortingType, sortingOrder}, searchedString) => {
		// console.log(users, {sortingType, sortingOrder}, searchedString);
		
		let data = [];
		
		const sortingFunction = (a, b) => {

			let first = a[sortingType];
			let second = b[sortingType];

			if (typeof first === 'string' || typeof second === 'string') {
				first = first.toLowerCase();
				second = second.toLowerCase();
			}
			if (first <= second) return -1;

			return 1;
		};
		const fuseSearch = (data, searchString) => {
			let fuse = new Fuse(data, {
				// minMatchCharLength: 3,
				useExtendedSearch: true,
				threshold: 0.3,
				shouldSort: false,
				keys: ["name"]
			});
			let res = fuse.search(searchString).map(({item}) => item);
			return searchString ? res : data;
		}	


		data = [...users].sort(sortingFunction);


		if (sortingOrder === 'desc') {
			data.reverse()
		}
		if(searchedString){	
			data = fuseSearch(data, searchedString)
		}


		return data;
	}
	// ({users, sortingType, sortingOrder, searchedString}) => console.log(users, sortingType, sortingOrder, searchedString)
	
	// todos => todos.filter(todo => todo.isDone).length
  )