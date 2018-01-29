import React from 'react'
import {renderInput as InputField} from '../AuthComponents'
import {Link} from 'react-router-dom'

const inputStyle = {
  boxSizing: 'border-box',
  width: '25em'
}

const LoginPage = ({loginName, password}) => {
  return (
    <form>
      <h2 style={{
        marginTop: 0,
        paddingTop: 0
      }}>Register</h2>
      <InputField
        label='Username/Email'
        input={{
          value: loginName
        }}
        inputStyle={inputStyle}
      />
      <br display='none'/>
      <InputField
        label='Password'
        type='password'
        input={{
          value: password
        }}
        inputStyle={inputStyle}
      />
      <br display='none'/>
      <button type='submit'>Log In</button>
      <Link to='/'>
        <p>No account yet?</p>
      </Link>
    </form>
  )
}

export default LoginPage