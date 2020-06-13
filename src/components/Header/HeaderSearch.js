import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import { searchBy } from '../../redux/actions';


export const HeaderSearch = () => {

	const dispatch = useDispatch();
	const inputValue = useSelector(({app}) => app.searchedString)
	
	return (
		<input onChange={e => dispatch(searchBy(e.target.value))} value={inputValue}></input>
	)
}
