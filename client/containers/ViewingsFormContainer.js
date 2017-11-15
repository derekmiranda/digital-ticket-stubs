import { reduxForm } from 'redux-form';

import Tickets from 'components/Tickets';
import { ticketsFormName as formName } from 'client/constants';

const ViewingsFormContainer = reduxForm({
  form: formName,
  initialValues: {
    viewings: [
      {
        title: 'The Room'
      },
      {
        title: 'The Roo'
      },
    ]
  },
  // onSubmit: (values) => console.log(values)
  onSubmit: () => new Promise((res, rej) => setTimeout(rej, 500, 'Reject'))
})(Tickets);

export default ViewingsFormContainer;