import test from 'ava';

import db from 'models';
import { dbSetup } from 'utils/tests/db';

dbSetup(test);

test.serial('should reject passwords shorter than 8 chars', async t => {
  const { User } = db;
  await t.throws(User.create({
    username: 'derek',
    email: 'derek@miranda.com',
    passHash: 'secure',
  }))
})

test.serial('should reject passwords longer than 16 chars', async t => {
  const { User } = db;
  await t.throws(User.create({
    username: 'derek',
    email: 'derek@miranda.com',
    passHash: 'securesecuresecuresecure',
  }))
})