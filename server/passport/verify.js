const { User } = require("../../models");

exports.verifyLogin = async function(username, passHash, done) {
  try {
    const user = await User.find({ where: { username } });
    if (!user) {
      return done(null, false, {
        message: "User doesn't exist."
      });
    }
    const verified = await user.verifyPassHash(passHash);
    if (!verified) {
      return done(null, false, {
        message: "Username/password combination doesn't exist"
      });
    }
    return done(null, user);
  } catch (err) {
    return done(err);
  }
};

exports.verifyRegister = async function(req, username, passHash, done) {
  try {
    const user = req.body
    const result = await User.create(user);
    return done(null, result);
  } catch (err) {
    if (err.name && err.name.includes("Sequelize")) {
      console.error(err)
      return done(null, false, {
        message: "Database error"
      });
    }
    return done(err)
  }
};
