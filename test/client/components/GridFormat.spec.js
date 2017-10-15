import test from 'ava';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import React from 'react';

import createViewingsContainer from 'containers/createViewingsContainer';
import GridFormat from 'components/GridFormat';
import Ticket from 'components/Ticket';
import NewTicket from 'components/NewTicket';
import { initEnzyme } from 'utils/tests';

initEnzyme();

function initViewingsCtx({ sampleNewViewings = [] } = {}) {
	const ctx = {};

	ctx.sampleViewings = [
		{ id: 1, title: "A Hard Day's Night" },
		{ id: 3, title: "Yellow Submarine" },
	]

	ctx.store = configureStore()({
		viewings: ctx.sampleViewings,
		newViewings: sampleNewViewings,
	})

	const GridContainer = createViewingsContainer(GridFormat);
	ctx.wrapper = shallow(<GridContainer />, { context: { store: ctx.store }});
	ctx.dumbComponentWrapper = ctx.wrapper.dive();

	return ctx;
}

test('Renders Ticket for every viewing', t => {
	const { sampleViewings, dumbComponentWrapper } = initViewingsCtx();
	const numViewingTix = dumbComponentWrapper.find(Ticket).length;
	t.is(numViewingTix, sampleViewings.length);
})

test('Renders NewTicket for every new viewing', t => {
	const sampleNewViewings = [{}];
	const { sampleViewings, dumbComponentWrapper } = initViewingsCtx({ sampleNewViewings });
	const numViewingTix = dumbComponentWrapper.find(NewTicket).length;
	t.is(numViewingTix, sampleNewViewings.length);
})

test('Displays button to add new viewing', t => {
	const { dumbComponentWrapper } = initViewingsCtx();
	t.is(dumbComponentWrapper.containsMatchingElement(
		<button id='add-viewing'>+ Add Viewing</button>
	), true);
})

test('Clicking on Add Viewing button brings up new viewing editor', t => {
	const { dumbComponentWrapper, sampleViewings } = initViewingsCtx();
	const addButton = dumbComponentWrapper.findWhere(
		node => node.prop('id') === 'add-viewing' && node.type() === 'button'
	)
	addButton.simulate('click');
	t.is(
		dumbComponentWrapper.find(Ticket).length,
		sampleViewings.length + 1
	)
})

test.todo('Renders 4 tickets each row')
