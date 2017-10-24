import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import Ticket from 'components/Ticket';
import { testRendering, initEnzyme } from 'utils/tests';

initEnzyme();

function initCtx() {
  const ctx = {};
  ctx.sample = {
    id: 1,
    title: 'B- Movie',
    venue: 'The Honeycomb',
  }
  ctx.watchtime = '2017-10-15T11:23:54.659Z';
  ctx.wrapper = shallow(<Ticket viewing={ctx.sample} />);
  return ctx;
}

function createWatchtimeInputs() {
  const watchtimeInputs = [
    'month',
    'date',
    'year',
    'hour',
    'mins',
  ]
    .map(name => <input type="text" name={name} />)
    .concat(
      <select name="period">
        <option value="am">AM</option>
        <option value="pm">PM</option>
      </select>
    )

  return watchtimeInputs;
}

testRendering(test, <Ticket />);

const inputTestMacro = (t, field) => {
  const { sample, wrapper } = initCtx();
  const inputWrapper = wrapper.findWhere(
    node => node.type() === 'input'
            && node.prop('value') === sample[field]
            && node.prop('className') === field
  )
  t.is(inputWrapper.length, 1);
}

inputTestMacro.title = (field) => `Renders input for ${field}`;

test('title', inputTestMacro, 'title');
test('venue', inputTestMacro, 'venue');

test('Has button for adding watchtime', t => {
  const { sample, wrapper } = initCtx();
  const watchtimeInputs = createWatchtimeInputs();

  // doesn't contain any watchtime inputs yet
  t.false(wrapper.containsAnyMatchingElements(watchtimeInputs));

  const addWatchtimeBtn = wrapper.find('button.add-watchtime');
  t.true(addWatchtimeBtn.exists());
})