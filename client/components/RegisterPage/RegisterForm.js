import React from 'react'
import {Field} from 'redux-form'
import styled from 'styled-components'

const renderInput = ({label, input, type}) => (
  <label style={{
    display: 'inline-block',
    textAlign: 'left',
  }}>
    {label}
    <br display='none' />
    <input {...input} type={ type || 'text' }/>
  </label>
)

const StyledForm = styled.form`
  padding: 2em;


`

const RegisterForm = ({handleSubmit}) => (
  <StyledForm>
    <h2 style={{ marginTop: 0, paddingTop: 0 }}>Register</h2>
    <fieldset style={{
      border: 0,
      padding: 0,
    }}>
      <Field name='firstName' component={renderInput} label='First Name'/>
      <Field name='lastName' component={renderInput} label='Last Name'/>
    </fieldset>
    <div>
      <Field name='username' component={renderInput} label='Username'/>
    </div>
    <div>
      <Field name='email' component={renderInput} label='Email'/>
    </div>
    <div>
      <Field
        name='password'
        component={renderInput}
        label='Password'
        type='password'/>
    </div>
    <div>
      <Field
        name='password_confirm'
        component={renderInput}
        label='Confirm Password'
        type='password'/>
    </div>
    <button type='button' onClick={handleSubmit}>Submit</button>
  </StyledForm>
)

export default RegisterForm