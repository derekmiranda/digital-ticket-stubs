import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

import LoginForm from 'components/LoginPage/LoginForm'
import { loginFormName as formName } from 'client/constants'
import { submitUser } from '../services/userApi'

class LoginFormWithRouter extends Component {
  submitForm(user) {
    return Promise.resolve(submitUser(user))
      .then(result => {
        this.props.history.push('/')
      })
      .catch(err => {
        throw new SubmissionError({
          _error: 'Login failed, please try again.'
        })
      })
  }

  render() {
    return <LoginForm {...this.props} submitForm={this.submitForm.bind(this)} />
  }
}

const LoginFormContainer = reduxForm({
  form: formName
})(LoginFormWithRouter)

export default LoginFormContainer
