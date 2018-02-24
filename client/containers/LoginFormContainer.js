import React, { Component } from 'react'
import { reduxForm, SubmissionError } from 'redux-form'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { store } from '../index'
import LoginForm from 'components/LoginPage/LoginForm'
import { loginFormName as formName } from 'client/constants'
import { loginSucceeded } from '../actions/creators'
import { loginUser } from '../services/userApi' 
import { saveToken } from '../auth'

class LoginFormWithRouter extends Component {
  submitForm(user) {
    return Promise.resolve(loginUser(user))
      .then(result => {
        this.props.history.push('/')
        store.dispatch(loginSucceeded())
        saveToken(result.access_token)
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
