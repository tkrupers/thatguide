import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import reducers from 'thatguide/reducers';
import sagas from 'thatguide/sagas';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux'

export const history = createHistory();
const MyRouterMiddleware = routerMiddleware(history);
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, composeEnhancers(applyMiddleware(MyRouterMiddleware, sagaMiddleware, thunk)));

// Start Saga process
sagaMiddleware.run(sagas);