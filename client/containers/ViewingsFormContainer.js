import { reduxForm } from 'redux-form';

import Tickets from 'components/Tickets';

export const formName = 'viewingsForm';

const ViewingsFormContainer = reduxForm({
  form: formName,
  initialValues: {
    viewings: [
      {
        title: 'Bug Story'
      },
      {
        title: 'Boy Story'
      },
    ]
  },
  onSubmit: (values) => console.log(values)
})(Tickets);

export default ViewingsFormContainer;