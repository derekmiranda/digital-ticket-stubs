import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import Watchtime from 'components/Watchtime';
import { testRendering, initEnzyme } from 'utils/tests';

initEnzyme();
testRendering(test, <Watchtime />);

function createWatchtimeInputs() {
  const watchtimeInputs = [
    'month',
    'date',
    'year',
  ].map(name => <input type="text" name={name} />)

  return watchtimeInputs;
}

const datetimeStr = '2017-10-26T15:22:26.609Z';

function initCtx({ datetime } = {}) {
	const ctx = {};
	ctx.wrapper = shallow(<Watchtime datetime={datetime} />);
	return ctx;
}

test('Has proper inputs', t => {
	const inputs = createWatchtimeInputs();
	const { wrapper } = initCtx();
	t.true(wrapper.containsAllMatchingElements(inputs));
})

test.todo('Displays datetime through inputs');