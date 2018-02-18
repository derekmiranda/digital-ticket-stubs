import React, { Component } from 'react'
import { reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import RegisterForm from 'components/RegisterPage/RegisterForm'
import { registerFormName as formName } from 'client/constants'
import { validateRegisterForm, asyncValidateRegisterForm } from 'validators'
import { submitUser } from '../services/userApi'

class RegisterFormWithRouter extends Component {
  submitForm(user) {
    return Promise.resolve(submitUser(user))
      .then((result) => {
        this.props.history.push('/')
      })
      .catch((err) => {
        throw new SubmissionError({
          _error: 'Registration failed, please try again.'
        })
      })
  }

  render() {
    return <RegisterForm {...this.props}
      submitForm={this.submitForm.bind(this)}
    />
  }
}

const ReduxFormContainer = reduxForm({
  form: formName,
  validate: validateRegisterForm,
  asyncValidate: asyncValidateRegisterForm,
  asyncBlurFields: ['username', 'email'],
})(RegisterFormWithRouter)

const RegisterFormContainer = withRouter(ReduxFormContainer)

export default RegisterFormContainer
