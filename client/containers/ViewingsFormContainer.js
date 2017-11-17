import React, { PureComponent } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import Tickets from 'components/Tickets';
import { startTicketsLoad } from 'actions/creators';
import { ticketsFormName as formName } from 'client/constants';

class LoadContainer extends PureComponent {
  componentDidMount() {
    this.props.startTicketsLoad();
  }

  render() {
    return (
      <Tickets {...this.props} />
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
  { startTicketsLoad }
)(ReduxFormContainer);

export default ViewingsFormContainer;