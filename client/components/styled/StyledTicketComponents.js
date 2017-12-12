import styled from 'styled-components'

import {
	forMobile,
	forDesktop,
} from 'client/utils/styleUtils';
import { renderTextField } from '../Ticket/TicketComponents';
import { ticketMargin, mainTextColor, ticketFonts } from 'client/constants'

export const BaseTextField = styled(renderTextField)`
	input {
		${ticketFonts};
		color: ${mainTextColor};
		width: 80%;
		text-align: center;
		background-color: rgba(0,0,0,0);
		border: 0;
	}
`

const line = `
	&::after {
		content: '';
		margin: 0 auto;
		display: block;
		width: calc(100% - 2em);
		height: 1px;
		background-color: black;
	}
`
	
export const VenueField = BaseTextField.extend`
	input {
		font-size: 1.2em;
	}

	${line}

	input {
		margin: ${ticketMargin} 0;
	}
`

export const TitleField = BaseTextField.extend`
	input {
		font-size: 2em;
		margin: ${ticketMargin} 0;
	}

	${line}
`

export const WatchtimeTextField = BaseTextField.extend`
	display: inline-block;

	input {
		width: 4em;
		margin-left: .25em; 
		margin-right: .25em; 
	}
`