import renderer from 'react-test-renderer';
import Navbar from '../../component/navbar';

it('it matches the snapshot', () => {
  const navbar = renderer.create(Navbar).toJSON();
  expect(navbar).toMatchSnapshot();
});
