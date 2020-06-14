import React from 'react'
import {NavLink} from 'react-router-dom';
import { useLocation } from 'react-router'

export const HeaderFavourites = () => {

	const isFavourites = useLocation().pathname.includes('favourites')

	return <div  className="favourite__btn"> <NavLink to={isFavourites ? '/' :'/favourites'}><i className={`star ${isFavourites ? 'active': ''}`}></i></NavLink> </div> 
	
}
