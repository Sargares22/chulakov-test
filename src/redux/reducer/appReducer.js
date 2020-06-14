import { SORTING_BY, CHANGE_LANGUAGE, SEARCH_BY, CHANGE_DATA_DISPLAY} from "../types";
import { getValueFromUrl } from "../../helpers/functions";

const sortingType = getValueFromUrl('sortingType')
const sortingOrder = getValueFromUrl('sortingOrder')
const viewType = getValueFromUrl('viewType')
const searchString = getValueFromUrl('searchString')


const initState = {
	viewType: viewType ? viewType : 'table',
	sorting: {
		sortingType: sortingType ? sortingType : 'id',
		sortingOrder: sortingOrder ? sortingOrder : 'asc'
	},
	language: 'ru',
	searchString: searchString ? searchString : '',
}

export const app = (state = initState, action) => {
	switch(action.type){


		case SEARCH_BY:
			return {...state, searchString: action.payload.searchString}
			
		case CHANGE_LANGUAGE:
			return {...state, language: action.payload}

		case SORTING_BY:
			// let sortingOrder = (state.sorting.sortingType === action.payload.type.toLowerCase()) ? !state.sorting.sortingOrder : false;
			return { 
				...state, 
				sorting: action.payload
			};

		case CHANGE_DATA_DISPLAY:
			return {...state, viewType: action.payload.viewType}
		default: return state
	}
};