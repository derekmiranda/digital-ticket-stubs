import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import Watchtime from 'components/Watchtime';
import { testRendering, initEnzyme } from 'utils/tests';

initEnzyme();
testRendering(test, <Watchtime />);

const datetimeStr = '2017-10-26T15:22:26.609Z';

function createWatchtimeInputs() {
  const watchtimeInputs = [
    'month',
    'date',
    'year',
  ].map(name => <select name={name} />)

  return watchtimeInputs;
}

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

test.skip('Displays datetime through inputs', t => {
	const { wrapper } = initCtx({ datetime: datetimeStr });
	const inputs = wrapper.find('select');
	const values = inputs.map(input => input.prop('value'));
	console.log("values", values)
	t.pass();
});