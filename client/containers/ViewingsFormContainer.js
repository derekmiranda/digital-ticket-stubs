import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import Tickets from 'components/Tickets';
import { ticketsFormName as formName } from 'client/constants';

const getUserId = () => 1;

const ReduxFormContainer = reduxForm({
  form: formName,
  // onSubmit: (values) => console.log(values)
  onSubmit: () => new Promise((res, rej) => setTimeout(rej, 500, 'Reject'))
})(Tickets);

const ViewingsFormContainer = connect(
  state => ({
    initialValues: state.initialViewings,
  })
)(ReduxFormContainer);

export default ViewingsFormContainer;