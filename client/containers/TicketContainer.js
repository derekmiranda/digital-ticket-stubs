import { connect } from 'react-redux';
import Ticket from 'components/Ticket';

const mapStateToProps = (_, ownProps) => ownProps;
const mapDispatchToProps = (dispatch) => ({
  ticketOnClick: () => console.log('success!'),
})

const TicketContainer = connect(mapStateToProps, mapDispatchToProps)(Ticket);

export default TicketContainer;