import test from 'ava'
import request from 'supertest'
import path from 'path'

// load environment vars
const loadedEnv = require('dotenv').load(
  { path: path.resolve(__dirname, `../../config/.${process.env.NODE_ENV}.env`) }
);
const { USER_API_URL } = loadedEnv.parsed

import app from '../../server'
import { dbSetup } from 'utils/tests/db';


dbSetup(test);

test.serial("Successful user registration provides token as cookie", async t => {
  try {
    const jwtValue = /access_token=[\w-]+\.[\w-]+\.[\w-]+/
    await request(app)
      .post(`${USER_API_URL}/create`)
      .send({
        username: 'sample',
        email: 'sample@sample.com',
        passHash: 'sample_password',
      })
      .expect('Set-Cookie', jwtValue)
      // expect cookie expiry === jwt expiry
      // assert jwt shape
    t.pass()
  } catch (err) {
    throw err
  }
})