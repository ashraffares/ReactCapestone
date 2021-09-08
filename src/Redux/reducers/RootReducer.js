import { combineReducers } from 'redux';
import PokeReducer from './PokeRecuer';
import getInfoReducer from './getInfoReducer';

const RootReducer = combineReducers({
  PokeReducer,
  getInfoReducer,
});

export default RootReducer;
