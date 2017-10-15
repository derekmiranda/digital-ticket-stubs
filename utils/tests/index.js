import render from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { JSDOM } from 'jsdom';

export function testRendering(test, component) {
  test('Renders properly', t => {
    const tree = render.create(component).toJSON();
    t.snapshot(tree);
  })
}

export function initEnzyme() {
  configure({ adapter: new Adapter() });
}

export function initMount () {
  const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
  const { window } = jsdom;

  global.window = window;
  global.document = window.document;
  global.navigator = {
    userAgent: 'node.js',
  };
}