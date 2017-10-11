import test from 'ava';
import { shallow, configure } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import React from 'react';
import Adapter from 'enzyme-adapter-react-15';

import createViewingsContainer from 'containers/createViewingsContainer';
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

	const GridContainer = createViewingsContainer(GridFormat);

	ctx.wrapper = shallow(
		<Provider store={ctx.store}>
			<GridContainer />
		</Provider>
	)

	return ctx;
}

test('Renders ViewingTicket for every viewing', t => {
	const { samples, wrapper } = initViewingsCtx();
	const numViewingTix = wrapper.find(ViewingTicket).length;
	t.is(numViewingTix, samples.length);
})

test.todo('Renders 4 tickets each row');
