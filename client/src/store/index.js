import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware'
import rootReducer from './reducers';

const middleware = [
  thunk,
  promiseMiddleware(),
  logger,
];

const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, withDevTools(
  applyMiddleware(...middleware)
));
