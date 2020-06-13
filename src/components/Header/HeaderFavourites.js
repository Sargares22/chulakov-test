import React from 'react'
import {NavLink} from 'react-router-dom';
import { useLocation } from 'react-router'

export const HeaderFavourites = () => {

	const isFavourites = useLocation().pathname.includes('favourites')

	return <NavLink to={isFavourites ? '/' :'/favourites'} className="favourites__btn"><i className={`star ${isFavourites ? 'active': ''}`}></i></NavLink>
	
}
