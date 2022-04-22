import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';

const { NODE_ENV } = process.env;

const middleware = NODE_ENV === 'development'
  ? composeWithDevTools(applyMiddleware(thunk, logger))
  : applyMiddleware(thunk, logger);

export default createStore(reducer, {}, middleware);
