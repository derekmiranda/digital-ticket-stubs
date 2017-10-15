import render from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

export function testRendering(test, component) {
  test('Renders properly', t => {
    const tree = render.create(component).toJSON();
    t.snapshot(tree);
  })
}

export function initEnzyme() {
  configure({ adapter: new Adapter() });
}