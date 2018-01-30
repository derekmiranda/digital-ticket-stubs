// load environment vars
const {
  USER_API_URL
} = require('dotenv').load(
  { path: path.resolve(__dirname, `../../config/${process.env.NODE_ENV}.env`) }
);

import test from 'ava'
import request from 'supertest'

import app from '../../server'
import { dbSetup } from 'utils/tests/db';


dbSetup(test);

test.serial("Successful user registration provides token as cookie", async t => {
  try {
    await request(app)
      .post(USER_API_URL, {
        username: 'sample',
        email: 'sample@sample.com',
        passHash: 'sample_password',
      })
      .expect(/* cookie */)
  } catch (err) {
    throw err
  }
})