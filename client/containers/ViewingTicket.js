import { connect } from 'react-redux';

import Ticket from 'components/Ticket';

const mapStateToProps = state => state;

const ViewingTicket = connect(mapStateToProps)(Ticket);

export default ViewingTicket;