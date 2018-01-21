import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import RegisterForm from 'components/RegisterPage/RegisterForm'
import { registerFormName as formName } from 'client/constants'
import { validateRegisterForm } from 'validators'

const RegisterFormContainer = reduxForm({
  form: formName,
  validate: validateRegisterForm,
})(RegisterForm)

export default RegisterFormContainer
