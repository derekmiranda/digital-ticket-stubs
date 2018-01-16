import React from 'react'
import { Field } from 'redux-form'

const renderInput = ({ label, input }) => (
  <div>
    {label}<input {...input} />
  </div>
)

const RegisterForm = ({ handleSubmit }) => (
	<form>
    <h3>Register</h3>
    <Field
      name='username'
      component={renderInput}
      label='Username'
    />
    <Field
      name='email'
      component={renderInput}
      label='Email'
    />
    <Field
      name='firstName'
      component={renderInput}
      label='First Name'
    />
    <Field
      name='lastName'
      component={renderInput}
      label='Last Name'
    />
		<button type='button' onClick={handleSubmit}>Submit</button>
	</form>
)

export default RegisterForm