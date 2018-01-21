export const isRequired = val => (val && val.trim()) ? undefined : 'Required';

export const emptyOrFilledWatchtime = wt => {
	const res = wt
		&& (
			(wt.month && wt.day && wt.year)
			|| (!wt.month && !wt.day && !wt.year)
		)
	return !!res
}

export const isEmail = val => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)

export const checkPasswordLength = val => val.length < 8 || val.length > 16
	? "Password must be between 8 and 16 characters"
	: undefined

const checkPasswordsMatch = values => (
	values.password === values.password_confirm
		? undefined
		: "Password and confirmation must match"
)

export const validateRegisterForm = values => {
	const errors = {}

	errors.password = checkPasswordsMatch(values)

	return errors
}