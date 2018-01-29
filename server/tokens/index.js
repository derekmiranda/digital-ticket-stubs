const jwt = require('jsonwebtoken')
const { JWT_SECRET, JWT_EXPIRY } = process.env

module.exports = {
	createToken({ user, host }) {
		const now = Date.now() / 1000
		const expiry = +JWT_EXPIRY
		const payload = {
			iss: host,
			sub: user.username,
			exp: now + expiry,
			iat: now,
			email: user.email,
			role: 'user'
		}

		return new Promise((resolve, reject) => {
			jwt.sign(payload, JWT_SECRET, (err, token) => {
				if (err) reject(err)
				resolve(token)
			})
		})
	},

	checkTokenExpiry(expiry) {
		const expiry_ms = expiry * 1000
		return Date.now() >= expiry_ms
	}
}