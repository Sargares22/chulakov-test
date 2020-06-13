import { TOGGLE_FAVOURITE_PROPERTY, FETCH_DATA, DATA_LOADING, CHANGE_CURRENT_PLAY } from "../types";

const initState = {
	data: [],
	loading: false,
}

export const users = (state = initState, action) => {

	switch(action.type){
		case TOGGLE_FAVOURITE_PROPERTY:
			let {id, value} = action.payload
			return 	{...state, data: state.data.map(item => { 
				return item.id === id ? {...item, favourite: value}  : item
			})}
		case DATA_LOADING:
			return {...state, loading: true}
		case FETCH_DATA:
			return {...state, data: action.payload, loading: false}

		default: return state
	}
};