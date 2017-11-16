// get flat array of all fields under a Redux Form field
export const getTicketFields = (fieldNames, ticketName) => fieldNames.filter(name => name.includes(ticketName));