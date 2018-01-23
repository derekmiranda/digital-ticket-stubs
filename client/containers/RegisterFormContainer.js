import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import RegisterForm from 'components/RegisterPage/RegisterForm'
import { registerFormName as formName } from 'client/constants'
import { validateRegisterForm, asyncValidateRegisterForm } from 'validators'

const RegisterFormContainer = reduxForm({
  form: formName,
  validate: validateRegisterForm,
  // asyncValidate: asyncValidateRegisterForm,
  asyncBlurFields: ['username', 'email'],
})(RegisterForm)

export default RegisterFormContainer
