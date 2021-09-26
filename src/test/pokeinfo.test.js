import renderer from 'react-test-renderer';
import PokeInfo from '../container/PokeInfo';

it('it matches the snapshot', () => {
  const pokeinfo = renderer.create(PokeInfo).toJSON();
  expect(pokeinfo).toMatchSnapshot();
});
