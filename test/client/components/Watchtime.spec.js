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

test('Has selects for month, day, and year', t => {
	const inputs = createWatchtimeInputs();
	const { wrapper } = initCtx();
	['month', 'day', 'year'].forEach(timeUnit => {
		const timeUnitWrap = wrapper.find(`select[name="${timeUnit}"]`);
		t.is(timeUnitWrap.length, 1);
	})
})

test('Displays datetime through selects', t => {
	const { wrapper } = initCtx({ datetime: datetimeStr });
	const selects = wrapper.find('select');
	const selectValues = selects.map(select => select.prop('value'));
	
	const dateObj = new Date(datetimeStr);
	const monthVal = dateObj.getMonth() + 1;
	const dayVal = dateObj.getDate();
	const yearVal = dateObj.getFullYear();
	const expectedValues = [ monthVal, dayVal, yearVal];
	t.deepEqual(selectValues, expectedValues);
});