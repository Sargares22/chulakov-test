import { GRID_ROW_COUNTER, SORTING_BY, CHANGE_LANGUAGE, SEARCH_BY, CHANGE_DATA_DISPLAY} from "../types";
import { getValueFromUrl } from "../../utils/functions";

const sortingType = getValueFromUrl('sortingType')
const sortingOrder = getValueFromUrl('sortingOrder')
const viewType = getValueFromUrl('viewType')
const searchedString = getValueFromUrl('searchedString')


const initState = {
	viewType: viewType ? viewType : 'table',
	sorting: {
		sortingType: sortingType ? sortingType : 'id',
		sortingOrder: sortingOrder ? sortingOrder : 'asc'
	},
	language: 'ru',
	gridRow: -1,
	searchedString: searchedString ? searchedString : '',
}

export const app = (state = initState, action) => {
	switch(action.type){


		case SEARCH_BY:
			return {...state, searchedString: action.payload.searchedString}
			
		case CHANGE_LANGUAGE:
			return {...state, language: action.payload}

		case SORTING_BY:
			// let sortingOrder = (state.sorting.sortingType === action.payload.type.toLowerCase()) ? !state.sorting.sortingOrder : false;
			return { 
				...state, 
				sorting: action.payload
			};

		case GRID_ROW_COUNTER:
			return {...state, gridRow: state.gridRow + 2}
		
		case CHANGE_DATA_DISPLAY:
			return {...state, viewType: action.payload.viewType}
		default: return state
	}
};