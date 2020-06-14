import React from 'react';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { createStore, compose, applyMiddleware} from 'redux';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import './helpers/i18n';

import App from './App';
import rootReducer from './redux/reducer/index.js';
import './index.sass';
import {syncUrl} from './middleware'

export const history = createBrowserHistory();


const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const store = createStore(rootReducer(history), composeEnhancers(
	applyMiddleware(
		thunk,
		syncUrl,
		routerMiddleware(history),
	)))


	
	

const app = (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>

)

render(app, document.getElementById('root'));