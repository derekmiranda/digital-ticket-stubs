import React from 'react'
import {Field} from 'redux-form'
import {renderInput} from '../AuthComponents'
import {Link} from 'react-router-dom'

import {isRequired} from '../../validators'

const inputStyle = {
  boxSizing: 'border-box',
  width: '25em'
}

const LoginForm = ({handleSubmit, valid}) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2 style={{
        marginTop: 0,
        paddingTop: 0
      }}>Login</h2>
      <Field
        name='username'
        label='Username'
        component={renderInput}
        inputStyle={inputStyle}
        validate={isRequired}
      />
      <br display='none'/>
      <Field
        name='password'
        label='Password'
        type='password'
        component={renderInput}
        inputStyle={inputStyle}
        validate={isRequired}
      />
      <br display='none'/>
      <button type='submit' disabled={!valid}>Submit</button>
      <Link to='/'>
        <p>No account yet?</p>
      </Link>
    </form>
  )
}

export default LoginForm