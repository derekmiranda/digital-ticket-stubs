import test from 'ava'
import request from 'supertest'

import app from '../../server'

test('Request to non-root or non-API urls redirects to index', async t => {
	try {
		await request(app)
			.get('/random')
			.expect(302)
		t.pass()
	} catch (err) {
		t.fail('Did not receive a 302 status')
	}
})