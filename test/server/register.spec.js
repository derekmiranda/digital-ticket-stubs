import test from 'ava'
import request from 'supertest'
import path from 'path'
import jwt from 'jsonwebtoken'

// load environment vars
const loadedEnv = require('dotenv').load(
  { path: path.resolve(__dirname, `../../config/.${process.env.NODE_ENV}.env`) }
);
const { USER_API_URL, JWT_EXPIRY, JWT_SECRET } = loadedEnv.parsed

import app from '../../server'
import { isTokenValid } from '../../server/tokens'
import { dbSetup } from 'utils/tests/db';


dbSetup(test);

function isObjInNextObj(obj1, obj2) {
  for (const key of Object.keys(obj1)) {
    if (obj1[key] !== obj2[key]) return false
  }
  return true
}

test.serial("Successful user registration provides token as cookie", async t => {
  try {
    const jwtValue = /access_token=([\w-]+\.[\w-]+\.[\w-]+)/
    const maxAge = new RegExp(`Max-Age=${+JWT_EXPIRY}`)
    const sampleUser = {
      username: 'sample',
      email: 'sample@sample.com',
      passHash: 'sample_password',
    }

    let token
    await request(app)
      .post(`${USER_API_URL}/create`)
      .send(sampleUser)
      .expect('Set-Cookie', jwtValue)
      .expect('Set-Cookie', maxAge)
      // store token value
      .expect((res) => {
        const cookie = res.get('Set-Cookie')
        const cookieMatch = jwtValue.exec(cookie)
        t.truthy(cookieMatch)
        token = cookieMatch[1]
      })

    // payload assertions
    const payload = await jwt.verify(token, JWT_SECRET)
    const expectedPayload = {
      sub: sampleUser.username,
      email: sampleUser.email,
      role: 'user',
    }
    t.true(isObjInNextObj(expectedPayload, payload))
  } catch (err) {
    console.error(err)
    t.fail('Error running test')
  }
})