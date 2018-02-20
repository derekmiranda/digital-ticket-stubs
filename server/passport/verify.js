const log = require('debug')('stubs:verify')
const { User } = require('../../models')

exports.verifyLogin = async function(username, passHash, done) {
  try {
    const user = await User.find({ where: { username } })
    if (!user) {
      return done(null, false, {
        message: "User doesn't exist."
      })
    }
    const verified = await user.verifyPassHash(passHash)
    if (!verified) {
      return done(null, false, {
        message: "Username/password combination doesn't exist"
      })
    }
    return done(null, user)
  } catch (err) {
    return done(err, false)
  }
}

exports.verifyRegister = async function(req, username, passHash, done) {
  try {
    const user = req.body
    const result = await User.create(user)
    return done(null, result)
  } catch (err) {
    if (err.name && err.name.includes('Sequelize')) {
      console.error(err)
      return done(null, false, {
        message: 'Error saving user, please try again.'
      })
    }
    return done(err, false)
  }
}

exports.verifyJwt = async function(jwtPayload, done) {
  try {
    log('jwt payload', jwtPayload)
    const username = jwtPayload.sub
    const user = await User.find({ where: { username } })

    if (user) {
      return done(null, user)
    }

    return done(null, false, {
      message: "User doesn't exist"
    })
  } catch (err) {
    done(err, false)
  }
}
