import React from 'react';

export const HeaderSearch = ({searchString, handleSearchInput}) => {
	
	return (
		<input onChange={e => handleSearchInput(e.target.value)} value={searchString} required/>
	)
}
