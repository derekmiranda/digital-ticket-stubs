import { reduxForm } from 'redux-form';

const createViewingsContainer = (FormatComponent) => {
  return reduxForm({
    form: 'ticketsForm',
    onSubmit: (values) => console.log(values)
  })(FormatComponent);
}

export default createViewingsContainer;