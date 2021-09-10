import renderer from 'react-test-renderer';
import Poke from '../../component/Poke';

it('it matches the snapshot', () => {
  const poke = renderer.create(Poke).toJSON();
  expect(poke).toMatchSnapshot();
});
