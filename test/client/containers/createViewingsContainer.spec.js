import test from 'ava';
import React from 'react';
import render from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import createViewingsContainer from 'containers/createViewingsContainer';

test('Renders passed in component', t => {
  const Container = createViewingsContainer(
    () => <p>Hi</p>
  )
  const mockStore = configureStore();
  const tree = render.create(<Container store={mockStore()}/>).toJSON();
	t.snapshot(tree);
})