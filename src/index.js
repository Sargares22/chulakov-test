import React from 'react';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { createStore, compose, applyMiddleware} from 'redux';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import './utils/i18n';

import App from './App';
import rootReducer from './redux/reducer/index.js';
import './index.sass';
import urlSyncMiddleware from './middleware/syncUrl'

export const history = createBrowserHistory();

const store = createStore(rootReducer(history), compose(
	applyMiddleware(
		thunk,
		urlSyncMiddleware,
		routerMiddleware(history),
	), 
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	))


	
	

const app = (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>

)

render(app, document.getElementById('root'));