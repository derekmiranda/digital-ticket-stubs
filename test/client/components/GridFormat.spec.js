import test from 'ava';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import React from 'react';

import createViewingsContainer from 'containers/createViewingsContainer';
import GridFormat from 'components/GridFormat';
import Ticket from 'components/Ticket';
import { initEnzyme } from 'utils/tests';

initEnzyme();

function initViewingsCtx() {
	const ctx = {};

	ctx.samples = [
		{ id: 1, title: "A Hard Day's Night" },
		{ id: 3, title: "Yellow Submarine" },
	]

	ctx.store = configureStore()({
		viewings: ctx.samples,
	})

	const GridContainer = createViewingsContainer(GridFormat);
	ctx.wrapper = shallow(<GridContainer />, { context: { store: ctx.store }});
	ctx.dumbComponentWrapper = ctx.wrapper.dive();

	return ctx;
}

test('Renders Ticket for every viewing', t => {
	const { samples, dumbComponentWrapper } = initViewingsCtx();
	const numViewingTix = dumbComponentWrapper.find(Ticket).length;
	t.is(numViewingTix, samples.length);
})

test('Displays button to add new viewing', t => {
	const { dumbComponentWrapper } = initViewingsCtx();
	// console.log(wrapper.html())
	const btnWrap = dumbComponentWrapper.findWhere(
		node => node.prop('id') === 'add-viewing'
						&& node.type() === 'button'
						&& node.text() === '+ Add Viewing'
	)
	t.is(btnWrap.length, 1);
})

test.todo('Renders 4 tickets each row');
