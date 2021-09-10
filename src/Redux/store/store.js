import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from '../reducers/RootReducer';

const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger)),

);

export default store;
