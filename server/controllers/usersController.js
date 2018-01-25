const Sequelize = require('sequelize')
const curry = require('lodash/curry')
const { or } = Sequelize.Op

const { normalizeStr } = require('../../utils/general')
const db = require('../../models')
const { User } = db

const alreadyExistsMsg = attr => (
	`${attr} already exists, please choose another.`
)

const createCaseInsensitiveMatch = curry(
	(colName, lookupVal) => Sequelize.where(
		Sequelize.fn('LOWER', Sequelize.col(colName)), 'LIKE', lookupVal || ''
	)
)

const checkNormalizedStrs = (s1, s2) => (
	normalizeStr(s1) === normalizeStr(s2)
)

const usernameMatch = createCaseInsensitiveMatch('username')
const emailMatch = createCaseInsensitiveMatch('email')

const usersController = {
	checkUser: async (user) => {
		const { username, email } = user 

		try {
			const foundUser = await User.findOne({
				where: {
					[or]: [
						{ username: usernameMatch(username) },
						{ email: emailMatch(email) }
					]
				}
			})

			if (foundUser) {
				return {
					username: (
						checkNormalizedStrs(foundUser.username, username)
							? alreadyExistsMsg('Username')
							: undefined
					),
					email: (
						checkNormalizedStrs(foundUser.email, email)
							? alreadyExistsMsg('Email')
							: undefined
					),
				}
			} else {
				return {}
			}
		} catch (err) {
			throw err
		}
	},

	createUser: async (user) => {
		console.log(user)
	}
}

module.exports = usersController