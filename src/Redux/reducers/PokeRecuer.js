import ActionTypes from '../actions/ActionTypes';
import PokeInitialSTate from '../store/PokeInitialState';

const PokeReducer = (state = PokeInitialSTate, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POKE_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionTypes.FETCH_POKE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };

    case ActionTypes.FETCH_POKE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default: return state;
  }
};

export default PokeReducer;
