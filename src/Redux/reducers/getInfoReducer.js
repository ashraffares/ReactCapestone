/* eslint-disable no-console */
/* eslint-disable no-undef */
import ActionTypes from '../actions/ActionTypes';

const initialState = {
  data: {},
  loading: false,
  error: null,
};

const getInfoReducer = (state = initialState, action) => {
  const key = action.pokemonName;
  const info = {};
  info[key] = action.payload;
  switch (action.type) {
    case ActionTypes.FETCH_POKE_INFO_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionTypes.FETCH_POKE_INFO_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          [action.pokemonName]: action.payload,
        },
        loading: false,
        error: null,
      };

    case ActionTypes.FETCH_POKE_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default: return state;
  }
};

export default getInfoReducer;
