import { push } from 'connected-react-router';
import { SEARCH_BY, CHANGE_DATA_DISPLAY, SORTING_BY } from '../redux/types';

export const syncUrl = store => next => action => {
    if (action.type ===  SEARCH_BY || action.type === CHANGE_DATA_DISPLAY || action.type === SORTING_BY) {
		
		const state = store.getState();
		
		const currentQueries = new URLSearchParams(state.router.location.search);
		
		if(!Object.values(action.payload)[0]){
			currentQueries.delete(Object.keys(action.payload))
		}
		Object.entries(action.payload).forEach(([key, value]) => {
			if(!value)return
			currentQueries.set(key, value);
		});

        store.dispatch(push(
				`${state.router.location.pathname}?${currentQueries}`,
			));
		}
    return next(action);
};