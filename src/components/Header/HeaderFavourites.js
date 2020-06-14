import React from 'react'
import {NavLink} from 'react-router-dom';
import { useLocation } from 'react-router'

export const HeaderFavourites = () => {

	const isFavourites = useLocation().pathname.includes('favourites')
	const query = useLocation().search;


	return <div  className="favourite__btn"> <NavLink to={isFavourites ? `/${query}` :`/favourites${query}`}><i className={`star ${isFavourites ? 'active': ''}`}></i></NavLink> </div> 
	
}
