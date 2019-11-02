import {
  createStore, applyMiddleware, compose, combineReducers
} from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import notifyReducer from 'react-redux-notify';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import initialState from './initialState';

declare interface IWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; // redux-dev-tools definitions not needed
}

declare const window: IWindow;

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const enhancers = [];
const middleware = [
  sagaMiddleware,
  routerMiddleware(history),
];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

const reducer = combineReducers({
  router: connectRouter(history),
  notifications: notifyReducer,
  ...rootReducer,
});

const store = createStore(
  reducer,
  initialState as any,
  composedEnhancers,
);

sagaMiddleware.run(rootSaga);

export default store;
