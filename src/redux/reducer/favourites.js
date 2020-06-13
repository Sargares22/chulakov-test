import { INIT_FAVOURITES, ADD_FAVOURITE, REMOVE_FAVOURITE } from "../types";

const initState = {
	data: [],
}

export const favourites = (state = initState, action) => {
	// console.log(action);
	switch(action.type){

		case INIT_FAVOURITES:
			return {...state, data: action.payload}

		case ADD_FAVOURITE:
			return {...state, data: state.data.concat(action.payload)}

		case REMOVE_FAVOURITE:
			return {...state, data: state.data.filter(item => {
				return item.id !== action.payload})}

		default:
			return state
		}
}
