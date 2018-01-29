import React from 'react'
import {Field} from 'redux-form'
import {renderInput} from '../AuthComponents'
import {Link} from 'react-router-dom'

const inputStyle = {
  boxSizing: 'border-box',
  width: '25em'
}

const LoginForm = ({handleSubmit}) => {
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
      />
      <br display='none'/>
      <Field
        name='password'
        label='Password'
        type='password'
        component={renderInput}
        inputStyle={inputStyle}
      />
      <br display='none'/>
      <button type='submit'>Submit</button>
      <Link to='/'>
        <p>No account yet?</p>
      </Link>
    </form>
  )
}

export default LoginForm