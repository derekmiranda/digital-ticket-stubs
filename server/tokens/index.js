const jwt = require('jsonwebtoken')
const db = require('../../models')

const { User } = db
const { JWT_SECRET, JWT_EXPIRY, JWT_REFRESH_TIME } = process.env

function createToken({ user, host }) {
  const now = Date.now() / 1000
  const expiry = +JWT_EXPIRY
  const payload = {
    iss: host,
    sub: user.username,
    role: 'user'
  }

  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      JWT_SECRET,
      {
        expiresIn: JWT_EXPIRY
      },
      (err, token) => {
        if (err) reject(err)
        resolve(token)
      }
    )
  })
}

function hasExpiryPast(expiry) {
  const expiry_ms = expiry * 1000
  const expired = Date.now() >= expiry_ms
  return expired
}

async function checkIfUserExists(username) {
  try {
    const user = await User.findOne({
      where: { username }
    })
    return !!user
  } catch (err) {
    throw err
  }
}

function isTokenValid(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, JWT_SECRET, (err, payload) => {
      if (err) return reject(err)
      resolve(isPayloadValid(payload))
    })
  })
}

function isPayloadValid(payload) {
  return new Promise((resolve, reject) => {
    if (hasExpiryPast(payload.exp)) return reject('Expired token')
    resolve(checkIfUserExists(payload.sub))
  }).then(userExists => {
    if (userExists) {
      return true
    } else {
      throw "User doesn't exist"
    }
  })
}

function shouldRefreshToken(issueTime) {
  const refreshTime = +JWT_REFRESH_TIME
  const refreshThreshold = (issueTime + refreshTime) * 1000
  return Date.now() >= refreshThreshold
}

module.exports = {
  createToken,
	isTokenValid,
	isPayloadValid,
  shouldRefreshToken
}
