import { combineReducers } from 'redux';
import PokeReducer from './PokeRecuer';

const RootReducer = combineReducers({
  PokeReducer,
});

export default RootReducer;
