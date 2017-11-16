import { reduxForm } from 'redux-form';

import Tickets from 'components/Tickets';
import { ticketsFormName as formName } from 'client/constants';

const getUserId = () => 1;

const ViewingsFormContainer = reduxForm({
  form: formName,
  initialValues: {
    viewings: [
      {
        title: 'My Neighbor Totoro'
      },
      {
        title: 'Grave of the Fireflies'
      },
    ]
    // for testing only
    .map(viewing => ({ ...viewing, UserId: getUserId() }))
  },
  // onSubmit: (values) => console.log(values)
  onSubmit: () => new Promise((res, rej) => setTimeout(rej, 500, 'Reject'))
})(Tickets);

export default ViewingsFormContainer;