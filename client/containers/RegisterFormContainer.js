import React, { Component } from 'react'
import { reduxForm, SubmissionError } from 'redux-form'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { store } from '../index'
import RegisterForm from 'components/RegisterPage/RegisterForm'
import { registerFormName as formName } from 'client/constants'
import { validateRegisterForm, asyncValidateRegisterForm } from 'validators'
import { registerSucceeded } from '../actions/creators'
import { submitUser } from '../services/userApi'
import { saveToken } from '../auth'

class RegisterFormWithRouter extends Component {
  submitForm(user) {
    return Promise.resolve(submitUser(user))
      .then(result => {
        saveToken(result.access_token)
        store.dispatch(registerSucceeded())
        this.props.history.push('/')
      })
      .catch(err => {
        throw new SubmissionError({
          _error: 'Register failed, please try again.'
        })
      })
  }

  render() {
    return (
      <RegisterForm {...this.props} submitForm={this.submitForm.bind(this)} />
    )
  }
}

const ReduxFormContainer = reduxForm({
  form: formName,
  validate: validateRegisterForm,
  asyncValidate: asyncValidateRegisterForm,
  asyncBlurFields: ['username', 'email']
})(RegisterFormWithRouter)

const RegisterFormContainer = withRouter(ReduxFormContainer)

export default RegisterFormContainer
