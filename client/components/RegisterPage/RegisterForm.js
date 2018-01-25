import React from 'react'
import {Field} from 'redux-form'
import styled from 'styled-components'

import { isRequired, isEmail, checkPasswordLength } from '../../validators';
import { ErrorMsg } from 'components/Icons'

const renderInput = ({
  label,
  input,
  type,
  meta: {
    touched,
    error
  }
}) => (
  <label style={{
    display: 'inline-block',
    textAlign: 'left'
  }}>
    {label}
    <br display='none'/>
    <input {...input} type={type || 'text'}/>
    {touched && error &&
      <ErrorMsg msg={error} style={{
        width: '1.5em',
        height: '1.5em',
        marginLeft: '.5em'
      }}/>
    }
  </label>
)

const StyledForm = styled.form `
  padding: 2em;
`

const RegisterForm = ({ handleSubmit, asyncValidating, valid }) => (
  <StyledForm onSubmit={handleSubmit}>
    <h2 style={{
      marginTop: 0,
      paddingTop: 0
    }}>Register</h2>
    <fieldset style={{
      border: 0,
      padding: 0
    }}>
      <Field name='firstName' component={renderInput} label='First Name'/>
      <Field name='lastName' component={renderInput} label='Last Name'/>
    </fieldset>
    <div>
      <Field
        name='username'
        component={renderInput}
        label='Username'
        validate={isRequired}/>
    </div>
    <div>
      <Field
        name='email'
        component={renderInput}
        label='Email'
        validate={[isRequired, isEmail]}/>
    </div>
    <div>
      <Field
        name='password'
        component={renderInput}
        label='Password'
        type='password'
        validate={[isRequired, checkPasswordLength]}/>
    </div>
    <div>
      <Field
        name='password_confirm'
        component={renderInput}
        label='Confirm Password'
        type='password'
        validate={isRequired}/>
    </div>
    <button type='submit' disabled={!valid || asyncValidating}>Submit</button>
  </StyledForm>
)

export default RegisterForm