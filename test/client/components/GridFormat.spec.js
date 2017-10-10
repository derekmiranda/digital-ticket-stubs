import test from 'ava';
import { shallow, configure } from 'enzyme';
import configureStore from 'redux-mock-store';
import React from 'react';
import Adapter from 'enzyme-adapter-react-15';

import GridFormat from 'components/GridFormat';
import ViewingTicket from 'containers/ViewingTicket';

// 10/10/17 - Enzyme started complaining about missing React adapter
configure({ adapter: new Adapter() });

function initViewingsCtx() {
	const ctx = {};

	ctx.samples = [
		{ id: 1, title: "A Hard Day's Night" },
		{ id: 3, title: "Yellow Submarine" },
	]

	ctx.store = configureStore()({
		viewings: ctx.samples,
	})

	ctx.wrapper = shallow(<GridFormat store={ctx.store} />)

	return ctx;
}

test('Renders ViewingTickets for every viewing', t => {
	const { store, samples } = initViewingsCtx();
	t.pass(); 
})

test.todo('Renders 4 tickets each row');
