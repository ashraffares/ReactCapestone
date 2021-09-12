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

  expect(res).toEqual({ items: [], loading: false, error: 'error' });
});

test('Should return object with items have object', () => {
  const res = PokeReducer(initialState,
    {
      type: 'FETCH_POKE_SUCCESS',
      payload: { name: 'bublasaur', url: '/bulbasaur/1' },
    });

  expect(res).toEqual({ items: { name: 'bublasaur', url: '/bulbasaur/1' }, loading: false, error: null });
});
