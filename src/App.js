import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router'
import {useDispatch} from 'react-redux'

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
						path={"/"} 
						component={Users} 
						/>
					<Route 
						path="/favourites"
						component={Favourites} 
					/>
					<Route render={() => <Redirect to={{pathname: "/"}} />} />
				</Switch>
			</div>
		</>
	);
}

export default App;
