import test from 'ava';
import argon2 from 'argon2';

import db from 'models';
import { dbSetup } from 'utils/tests/db';

dbSetup(test);

const sampleUser = {
  username: 'derek',
  email: 'derek@miranda.com',
  passHash: 'a'.repeat(20)
}

test.serial('should reject passwords shorter than 8 chars', async t => {
  const { User } = db;
  await t.throws(User.create({
    ...sampleUser,
    passHash: 'secure',
  }))
})

test.serial('should reject passwords longer than 160 chars', async t => {
  const { User } = db;
  await t.throws(User.create({
    ...sampleUser,
    passHash: 'a'.repeat(161)
  }))
})

test.serial("Doesn't accept duplicate usernames or emails", async t => {
  const { User } = db
  await User.create(sampleUser)
  await t.throws(User.create(sampleUser))
})

test.serial('should set password as 1-way encrypted hash', async t => {
  const { User } = db

  try {
    await User.create(sampleUser)
    const savedUser = await User.findOne({
      where: {
        username: sampleUser.username
      }
    })

    t.not(sampleUser.passHash, savedUser.passHash)
    
    // verify password saved correctly
    const verified = await argon2.verify(savedUser.passHash, sampleUser.passHash) 
    t.true(verified)
  } catch (err) {
    throw err
  }
})

test.serial.todo("Doesn't accept values with invalid characters")