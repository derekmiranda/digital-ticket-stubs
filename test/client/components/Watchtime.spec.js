import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import Watchtime from 'components/Watchtime';
import { testRendering, initEnzyme } from 'utils/tests';

initEnzyme();
testRendering(test, <Watchtime />);

const datetimeStr = '2017-10-26T15:22:26.609Z';
const sampleDateTime = {
	month: 10,
	day: 26,
	year: 2017,
}

function createWatchtimeInputs() {
  const watchtimeInputs = [
    'month',
    'day',
    'year',
  ].map(name => <select name={name} />)

  return watchtimeInputs;
}

function initCtx({ month, day, year } = {}) {
	const ctx = {};
	ctx.wrapper = shallow(<Watchtime month={month} day={day} year={year} />);
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
	const { wrapper } = initCtx({...sampleDateTime});
	const selects = wrapper.find('select');
	const selectValues = selects.map(select => select.prop('value'));
	
	const dateObj = new Date(datetimeStr);
	const monthVal = dateObj.getMonth() + 1;
	const dayVal = dateObj.getDate();
	const yearVal = dateObj.getFullYear();
	const expectedValues = [ monthVal, dayVal, yearVal];
	t.deepEqual(selectValues, expectedValues);
});