import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next';


import Post from '../components/Post';
import { Loader } from '../components/Loader';
import { sortAndFilter } from '../selectors';
import { useListObserver, useVideoObserver } from '../hooks';
import { addFavourite, removeFavourite } from '../redux/actions';

export const Users = () => {

	const dispatch = useDispatch();
	const { t } = useTranslation();
	const { userList, loading, viewType } = useSelector((state => ({
			userList: sortAndFilter(state),
			loading: state.users.loading,
			viewType: state.app.viewType
		})
	))
	const { observeList } = useListObserver('main-data', viewType);
	const { observeVideos } = useVideoObserver('main-data');

	const toggleFavourite = (data, favourite) => {
		favourite || false ? dispatch(removeFavourite(data.id)) : dispatch(addFavourite({ ...data, favourite: true }));
	}	
	console.log(userList);
	

	useEffect(() => {
		if (userList.length) {
			observeList();
			observeVideos();
		}
	}, [userList, observeList, observeVideos]);

	return (
		<>
			{
				loading ?
					<Loader />
					:
					<ul id={'main-data'} className={`main-data ${viewType}`}>
						{userList.map((data, ind) => {
							return <Post key={data.id} data={data} ind={ind} viewType={viewType} toggleFavourite={toggleFavourite} />
						})}
					</ul>
			}
			{!loading && !userList.length && <div style={{fontSize: '20px', textAlign: 'center', }}>{t("main.empty")}</div>}
		</>
	)
}