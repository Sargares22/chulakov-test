import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'

import Post from '../components/Post';
import { Loader } from '../components/Loader';
import { sortAndFilter } from '../selectors/users';
import { useListObserver, useVideoObserver } from '../hooks';
import { addFavourite, removeFavourite, changeCurrentPlay } from '../redux/actions';

export const Favourites = () => {

	const {userList, loading, viewType} = useSelector((state => ({
			favourites: sortAndFilter(state),
			loading: state.app.loading,
			viewType: state.app.viewType
		})
	))

	const  { observeList } = useListObserver('main-data', viewType);
	const { observeVideos } = useVideoObserver('main-data');
	const dispatch = useDispatch();

	const toggleFavourite = (data, favourite) => {
		favourite || false ? dispatch(removeFavourite(data.id)) : dispatch(addFavourite({...data, favourite: true}));
	}

	useEffect(() => {
		if(userList.length){
			observeList();
			observeVideos();
		}
	}, [userList, observeList, observeVideos]);


	return (
		<>
			{
				loading ?
					<Loader/> :
					<ul id={'main-data'} className={`main-data ${viewType}`}>
						{userList.map((data, ind) => {
							return <Post key={data.id} data={data} ind={ind} viewType={viewType} toggleFavourite={toggleFavourite}/>
						})}
					</ul>
			}
		</>
	) 
}
