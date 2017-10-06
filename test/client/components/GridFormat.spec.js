import test from 'ava';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import GridFormat from 'components/GridFormat';
import ViewingTicket from 'containers/ViewingTicket';

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
