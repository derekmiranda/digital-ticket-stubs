import React, { PureComponent } from 'react';
import { reduxForm, arrayPush } from 'redux-form';
import { connect } from 'react-redux';

import TicketsForm from 'components/TicketsForm';
import { startTicketsLoad, sortTickets } from 'actions/creators';
import { ticketsFormName as formName } from 'client/constants';
import getFormId from 'client/getFormId';

const getUserId = () => 1;

class LoadContainer extends PureComponent {
  componentDidMount() {
    this.props.startTicketsLoad();
  }

  render() {
    return (
      <TicketsForm {...this.props} />
    )
  }
} 

const ReduxFormContainer = reduxForm({
  form: formName,
  enableReinitialize: true,
  // onSubmit: (values) => console.log(values)
  onSubmit: () => new Promise((res, rej) => setTimeout(rej, 500, 'Reject'))
})(LoadContainer);

const ViewingsFormContainer = connect(
  state => ({
    loading: state.loading,
    initialValues: state.initialViewings,
  }),
  {
    startTicketsLoad,
    addTicket: () => arrayPush(formName, 'viewings', {
      UserId: getUserId(),
      formId: getFormId(),
    }),
    sortTickets,
  }
)(ReduxFormContainer);

export default ViewingsFormContainer;