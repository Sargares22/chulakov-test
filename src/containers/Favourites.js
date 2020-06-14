import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useTranslation } from 'react-i18next';

import Post from '../components/Post';
import { Loader } from '../components/Loader';
import { sortAndFilterFavourites } from '../selectors';
import { useListObserver, useVideoObserver } from '../hooks';
import { addFavourite, removeFavourite } from '../redux/actions';

export const Favourites = () => {

	const dispatch = useDispatch();
	const { t } = useTranslation();
	const {favourites, loading, viewType} = useSelector((state => ({
			favourites: sortAndFilterFavourites(state),
			loading: state.app.loading,
			viewType: state.app.viewType
		})
	))

	const  { observeList } = useListObserver('main-data', viewType);
	const { observeVideos } = useVideoObserver('main-data');

	const toggleFavourite = (data, favourite) => {
		favourite || false ? dispatch(removeFavourite(data.id)) : dispatch(addFavourite({...data, favourite: true}));
	}


	useEffect(() => {
		if(favourites.length){
			observeList();
			observeVideos();
		}
	}, [favourites, observeList, observeVideos]);


	return (
		<>
			{
				loading ?
					<Loader/> :
					<ul id={'main-data'} className={`main-data ${viewType}`}>
						{favourites.map((data, ind) => {
							return <Post key={data.id} data={data} ind={ind} viewType={viewType} toggleFavourite={toggleFavourite}/>
						})}
					</ul>
			}
			{!loading && !favourites.length && <div style={{fontSize: '20px', textAlign: 'center', }}>{t("main.empty")}</div>}
		</>
	) 
}
