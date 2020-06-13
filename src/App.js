import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router'
import {useSelector, useDispatch} from 'react-redux'

import { Header } from './containers/Header';
import { Users } from './containers/Users';
import { Favourites } from './containers/Favourites';
import { fetchData } from './redux/actions';

function App() {

	const dispatch = useDispatch();

	useEffect(() =>{
		dispatch(fetchData())
	}, [dispatch]);


	return (
		<>
			<Header />
			<div className="container">
				<Switch>
					<Route
						exact 
						path="/" 
						render={({location}) => <Users/>}
						// component={FetchedData} 
						/>
					<Route 
						path="/favourites"
						render={() => <Favourites />}
						// component={Favourites} 
					/>
				</Switch>
			</div>
		</>
	);
}

export default App;
