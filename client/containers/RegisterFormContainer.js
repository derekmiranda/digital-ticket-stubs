import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import RegisterForm from 'components/RegisterPage/RegisterForm'
import { registerFormName as formName } from 'client/constants'

const RegisterFormContainer = reduxForm({
  form: formName,
})(RegisterForm)

export default RegisterFormContainer
