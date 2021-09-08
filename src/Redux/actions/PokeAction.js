import axios from 'axios';
import ActionTypes from './ActionTypes';

const FetchPokeData = () => async (dispatch) => {
  dispatch({
    type: ActionTypes.FETCH_POKE_LOADING,
  });

  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
    dispatch({
      type: ActionTypes.FETCH_POKE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.FETCH_POKE_FAILURE,
      error,
    });
  }
};

export default FetchPokeData;
