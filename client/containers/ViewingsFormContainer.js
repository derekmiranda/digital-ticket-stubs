import { reduxForm } from 'redux-form';

import Tickets from 'components/Tickets';
import { ticketsFormName as formName } from 'client/constants';

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

export {
  formName
}
export default ViewingsFormContainer;