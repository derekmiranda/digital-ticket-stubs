import { reduxForm } from 'redux-form';

export const formName = 'viewingsForm';
const createViewingsContainer = (FormatComponent) => {
  return reduxForm({
    form: formName,
    initialValues: {
      viewings: [
        {
          title: 'Bug Story'
        }
      ]
    },
    onSubmit: (values) => console.log(values)
  })(FormatComponent);
}

export default createViewingsContainer;