import React, { PureComponent } from 'react';
import { reduxForm, arrayUnshift } from 'redux-form';
import { connect } from 'react-redux';

import TicketsForm from 'components/TicketsForm';
import { startTicketsLoad, sortTickets } from 'actions/creators';
import { ticketsFormName as formName } from 'client/constants';
import getFormId from 'meta/getFormId';
import createBaseViewing from '../meta/createBaseViewing'
import { isAuthenticated } from '../auth'

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
})(LoadContainer);

const ViewingsFormContainer = connect(
  state => ({
    loading: state.loading,
    initialValues: state.initialViewings,
    loggedIn: isAuthenticated(),
  }),
  {
    startTicketsLoad,
    addTicket: () => arrayUnshift(formName, 'viewings', createBaseViewing()),
    sortTickets,
  }
)(ReduxFormContainer);

export default ViewingsFormContainer;