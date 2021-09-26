import renderer from 'react-test-renderer';
import Info from '../component/Info/Info';

it('it matches the snapshot', () => {
  const info = renderer.create(Info).toJSON();
  expect(info).toMatchSnapshot();
});
