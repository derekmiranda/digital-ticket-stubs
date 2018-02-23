import React, { Component } from 'react'
import { reduxForm, SubmissionError } from 'redux-form'
import { withRouter } from 'react-router-dom'

import LoginForm from 'components/LoginPage/LoginForm'
import { loginFormName as formName } from 'client/constants'
import { loginUser } from '../services/userApi'

class LoginFormWithRouter extends Component {
  submitForm(user) {
    return Promise.resolve(this.props.startUserLogin(user))
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

const ReduxFormContainer = reduxForm({
  form: formName
})(LoginFormWithRouter)

const LoginFormContainer = withRouter(ReduxFormContainer)

export default LoginFormContainer
