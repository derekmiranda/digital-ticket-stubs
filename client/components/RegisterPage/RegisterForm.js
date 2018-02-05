import React from 'react'
import {Field} from 'redux-form'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import {renderInput} from '../AuthComponents'
import {isRequired, isEmail, checkPasswordLength, alphanumericAndUnderscores} from '../../validators';

const StyledForm = styled.form `
  padding: 2em;
`

const baseInputWidth = 25

const nameInputStyle = {
  boxSizing: 'border-box',
  width: `${baseInputWidth / 2}em`,
  maxWidth: '100%',
}

const inputStyle = {
  boxSizing: 'border-box',
  width: `${baseInputWidth}em`
}

const RegisterForm = ({
  handleSubmit,
  asyncValidating,
  valid,
  submitForm,
}) => (
  <StyledForm onSubmit={handleSubmit(submitForm)}>
    <h2 style={{
      marginTop: 0,
      paddingTop: 0
    }}>Register</h2>
    <fieldset style={{
      border: 0,
      padding: 0
    }}>
      <Field
        name='firstName'
        component={renderInput}
        label='First Name'
        inputStyle={nameInputStyle}/>
      <Field
        name='lastName'
        component={renderInput}
        label='Last Name'
        inputStyle={nameInputStyle}/>
    </fieldset>
    <Field
      name='username'
      component={renderInput}
      label='Username'
      validate={[isRequired, alphanumericAndUnderscores]}
      inputStyle={inputStyle}/>
    <br display='none'/>
    <Field
      name='email'
      component={renderInput}
      label='Email'
      validate={[isRequired, isEmail]}
      inputStyle={inputStyle}/>
    <br display='none'/>
    <Field
      name='password'
      component={renderInput}
      label='Password'
      type='password'
      validate={[isRequired, checkPasswordLength]}
      inputStyle={inputStyle}/>
    <br display='none'/>
    <Field
      name='password_confirm'
      component={renderInput}
      label='Confirm Password'
      type='password'
      validate={isRequired}
      inputStyle={inputStyle}/>
    <br display='none'/>
    <button type='submit' disabled={!valid || asyncValidating}>Submit</button>
    <Link to='/login'>
      <p>Already have an account?</p>
    </Link>
  </StyledForm>
)

export default RegisterForm