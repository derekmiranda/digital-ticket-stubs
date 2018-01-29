import { reduxForm } from 'redux-form';

import LoginForm from 'components/LoginPage/LoginForm'
import { loginFormName as formName } from 'client/constants'
import { loginUser } from '../services/userApi'

const LoginFormContainer = reduxForm({
  form: formName,
})(LoginForm)

export default LoginFormContainer
