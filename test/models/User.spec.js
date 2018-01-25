import test from 'ava';

import db from 'models';
import { dbSetup } from 'utils/tests/db';

dbSetup(test);

const sampleUser = {
  username: 'derek',
  email: 'derek@miranda.com',
  passHash: 'passwordd'
}

test.serial('should reject passwords shorter than 8 chars', async t => {
  const { User } = db;
  await t.throws(User.create({
    ...sampleUser,
    passHash: 'secure',
  }))
})

test.serial('should reject passwords longer than 16 chars', async t => {
  const { User } = db;
  await t.throws(User.create({
    ...sampleUser,
    passHash: 'securesecuresecuresecure',
  }))
})

test.serial("Doesn't accept duplicate usernames or emails", async t => {
  const { User } = db
  await User.create(sampleUser)
  await t.throws(User.create(sampleUser))
})

function toHash(str) {
  const hash = str
  return str
}

test.serial('should set password as 1-way encrypted hash', async t => {
  const { User } = db

  try {
    await User.create(sampleUser)
    const savedUser = await User.findOne({
      where: {
        username: sampleUser.username
      }
    })

    const hash = toHash(sampleUser.passHash)

    t.not(sampleUser.passHash, savedUser.passHash)
    t.is(savedUser.passHash, hash)
  } catch (err) {
    throw err
  }
})

test.serial.todo("Doesn't accept values with invalid characters")