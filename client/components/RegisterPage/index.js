import React from 'react'

const Input = ({ label, name }, i) => (
	<div key={i}>
		{label}
		<input name={name} />
	</div>
)

const inputFields = [
	{ label: 'First Name', name: 'firstName' },
	{ label: 'Last Name', name: 'lastName' },
	{ label: 'Email', name: 'email' },
]

const Inputs = inputFields.map(Input)

const RegisterPage = () => (
	<form>
		<h3>Register</h3>
		{Inputs}
	</form>
)

export default RegisterPage