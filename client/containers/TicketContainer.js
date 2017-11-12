import { connect } from 'react-redux';
import { getFormValues, change } from 'redux-form';
import PropTypes from 'prop-types';
import { curry } from 'lodash-es';

import Ticket from 'components/Ticket';
import { formName } from './createViewingsContainer';

const formSelector = getFormValues(formName);

const mapStateToProps = state => state;
const mapDispatchToProps = (dispatch, { idx, name }) => {
  const createSubmitHandlerWithState = (state) => () => {
    const { viewings } = formSelector(state);
    const viewing = viewings[idx];
    console.log(viewing);
    dispatch(change(formName, `${name}.id`, 1000))
  }
  return { createSubmitHandlerWithState };
}

const mergeProps = (state, { createSubmitHandlerWithState }, ownProps) => {
  const handleTicketSubmit = createSubmitHandlerWithState(state);
  return {
    ...ownProps,
    handleTicketSubmit,
  }
}

const TicketContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Ticket);

TicketContainer.propTypes = {
  idx: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
}

export default TicketContainer;