import getInfoReducer from '../Redux/reducers/getInfoReducer';

test('Should return object with loading: true', () => {
  const res = getInfoReducer({
    data: {},
    loading: false,
    error: null,
  },
  {
    type: 'FETCH_POKE_INFO_LOADING',
  });

  expect(res).toEqual({ data: {}, loading: true, error: null });
});

test('Should return object with error: "error"', () => {
  const res = getInfoReducer({
    data: {},
    loading: false,
    error: null,
  },
  {
    type: 'FETCH_POKE_INFO_FAILURE',
    error: 'error',
  });

  expect(res).toEqual({ data: {}, loading: false, error: 'error' });
});

test('Should return object with pokemon info data', () => {
  const res = getInfoReducer({
    items: {},
    loading: false,
    error: null,
  },
  {
    type: 'FETCH_POKE_INFO_SUCCESS',
    payload: { id: 0, name: 'bulbasaur' },
    pokemonName: 'bulbasaur',
  });

  expect(res).toEqual({ data: { bulbasaur: { id: 0, name: 'bulbasaur' } }, loading: false, error: null });
});
