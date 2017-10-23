import test from 'ava';
import { shallow, mount } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import createViewingsContainer from 'containers/createViewingsContainer';
import GridFormat from 'components/GridFormat';
import Ticket from 'components/Ticket';
import NewTicket from 'components/NewTicket';
import { addNewViewing } from 'actions/creators';
import { initEnzyme, initMount } from 'utils/tests';
import reducer from 'reducers';

initEnzyme();

const initShallowCtx = ({
	sampleViewings = [],
	sampleNewViewings = [],
} = {}) => {
	const ctx = {
		sampleNewViewings,
		sampleViewings,
	}

	const GridContainer = createViewingsContainer(GridFormat);
	ctx.store = configureStore()({
		viewings: sampleViewings,
		newViewings: sampleNewViewings,
	})
	ctx.wrapper = shallow(<GridContainer />, { context: { store: ctx.store } });
	ctx.dumbComponentWrapper = ctx.wrapper.dive();
	return ctx;
}

function initMountCtx({
	initialState = {},
} = {}) {
	initMount();
	const ctx = {};
	ctx.store = createStore(reducer, initialState);
	const GridContainer = createViewingsContainer(GridFormat);
	ctx.wrapper = mount(
		<Provider store={ctx.store}>
			<GridContainer />
		</Provider>
	)
	return ctx;
}

const sampleViewings = [
	{ id: 1, title: "A Hard Day's Night" },
	{ id: 3, title: "Yellow Submarine" },
]

/* Declarative Tests */

test('Renders Ticket for every viewing', t => {
	const { dumbComponentWrapper } = initShallowCtx({ sampleViewings });
	const numViewingTix = dumbComponentWrapper.find(Ticket).length;
	t.is(numViewingTix, sampleViewings.length);
})

test('Renders NewTicket for every new viewing', t => {
	const sampleNewViewings = [{}];
	const { dumbComponentWrapper } = initShallowCtx({ sampleNewViewings });
	const numViewingTix = dumbComponentWrapper.find(NewTicket).length;
	t.is(numViewingTix, sampleNewViewings.length);
})

test('Displays button to add new viewing', t => {
	const { dumbComponentWrapper } = initShallowCtx();
	t.is(dumbComponentWrapper.containsMatchingElement(
		<button id='add-viewing'>+ Add Viewing</button>
	), true);
})

/* Integration Tests */

test('Clicking on Add Viewing button brings up new viewing editor for every click', t => {
	const { wrapper } = initMountCtx();
	const addButton = wrapper.find('button');
	addButton.simulate('click');
	addButton.simulate('click');
	t.is(wrapper.find(NewTicket).length, 2);
})

test('Typing in Ticket field changes value', t => {
	const { wrapper, store } = initMountCtx({
		initialState: {
			viewings: sampleViewings,
		},
	});
	const firstTicket = wrapper.find('.ticket').first();
	const textInput = firstTicket.find('[name="title"]');
	const title = 'Sword Jogger';
	textInput.simulate('change', {
		target: {
			value: title,
		}
	})
	const { viewings } = store.getState();
	t.is(viewings[0].title, title);
})