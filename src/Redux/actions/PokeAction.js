/* eslint-disable no-console */
import axios from 'axios';
import ActionTypes from './ActionTypes';

export const FetchPokeData = () => async (dispatch) => {
  dispatch({
    type: ActionTypes.FETCH_POKE_LOADING,
  });

  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
    dispatch({
      type: ActionTypes.FETCH_POKE_SUCCESS,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.FETCH_POKE_FAILURE,
      error,
    });
  }
};

export const FetchPokeInfo = (id, name) => async (dispatch) => {
  dispatch({
    type: ActionTypes.FETCH_POKE_LOADING,
  });

  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    dispatch({
      type: ActionTypes.FETCH_POKE_INFO_SUCCESS,
      payload: response.data,
      pokemonName: name,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.FETCH_POKE_FAILURE,
      error,
    });
  }
};

export const SortDefault = () => ({
  type: ActionTypes.SORT_DEFAULT,
});

export const SortAlphabitically = () => ({
  type: ActionTypes.SORT_ALPHABETICALLY,
});

export const sortReverse = () => ({
  type: ActionTypes.SORT_REVERSE,
});
