import axios from 'axios';
import ActionTypes from './ActionTypes';

export const FetchPokeData = () => async (dispatch) => {
  dispatch({
    type: ActionTypes.FETCH_POKE_LOADING,
  });

  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=300');
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

export const FetchPokeInfo = (name) => async (dispatch) => {
  dispatch({
    type: ActionTypes.FETCH_POKE_LOADING,
  });

  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    dispatch({
      type: ActionTypes.FETCH_POKE_INFO_SUCCESS,
      payload: response.data,
      pokemonName: name,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.FETCH_POKE_INFO_FAILURE,
      error,
    });
  }
};
