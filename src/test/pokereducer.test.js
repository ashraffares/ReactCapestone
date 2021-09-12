import PokeReducer from '../Redux/reducers/PokeRecuer';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

test('Should return object with loading: true', () => {
  const res = PokeReducer(initialState,
    {
      type: 'FETCH_POKE_LOADING',
    });

  expect(res).toEqual({ items: [], loading: true, error: null });
});

test('Should return object with error: "error"', () => {
  const res = PokeReducer(initialState,
    {
      type: 'FETCH_POKE_FAILURE',
      error: 'error',
    });

  expect(res).toEqual({ data: [], loading: false, error: 'error' });
});

test('Should return object with pokemon info data', () => {
  const res = PokeReducer(initialState,
    {
      type: 'FETCH_POKE_SUCCESS',
      payload: { id: 0, name: 'bulbasaur' },
      pokemonName: 'bulbasaur',
    });

  expect(res).toEqual({ items: [{ id: 1, name: 'bulbasaur' }], loading: false, error: null });
});
