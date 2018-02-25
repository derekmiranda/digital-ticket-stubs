import React from 'react'
import { ErrorMsg } from 'components/Icons'

export const renderInput = ({
  label,
  input,
  placeholder,
  type,
  meta: {
    touched,
    error
  } = {},
  inputStyle,
}) => (
  <label style={{
    display: 'inline-block',
    textAlign: 'left'
  }}>
    <p style={{ margin: 0 }}>{label}</p>
    <input {...input}
      type={type || 'text'}
      placeholder={placeholder}
      style={inputStyle}  
    />
    {touched && error &&
      <ErrorMsg msg={error} style={{
        width: '1.5em',
        height: '1.5em',
        marginLeft: '.5em'
      }}/>
    }
  </label>
)