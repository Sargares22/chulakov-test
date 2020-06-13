import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import {app} from './appReducer'
import {favourites} from './favourites'
import {users} from './users'

export default (history) => combineReducers({
	app,
	favourites,
	users,
	router: connectRouter(history)
})