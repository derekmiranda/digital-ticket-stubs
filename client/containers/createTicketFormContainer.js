import { reduxForm } from 'redux-form';
import Ticket from 'components/Ticket';

let formIdx = 0;
const createTicketFormContainer = () => {
  return reduxForm({
    form: `ticketsForm_${formIdx}`,
    onSubmit: (values) => console.log(values)
  })(Ticket);
}

export default createTicketFormContainer;