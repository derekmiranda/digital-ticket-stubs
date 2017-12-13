import styled from 'styled-components'

import {
	forMobile,
	forDesktop,
} from 'client/utils/styleUtils';
import {
	renderTextField
} from '../Ticket/TicketComponents';
import {
	ticketMargin,
	mainTextColor,
	ticketFonts,
	fontFace,
	line,
} from 'client/constants'

export const BaseTextField = styled(renderTextField)
`
	${fontFace}

	input {
		font-family: ${ticketFonts};
		color: ${mainTextColor};
		width: 80%;
		text-align: center;
		background-color: rgba(0,0,0,0);
		border: 0;
		outline-color: lightsteelblue;
	}
`

export const VenueField = BaseTextField.extend `
	input {
		font-size: 1em;
		margin: ${ticketMargin} 0;
	}

	${line}
`

export const TitleField = BaseTextField.extend `
	input {
		margin: 10%;
		font-size: 1.5em;
		margin: ${ticketMargin} 0;
	}

	${line}
`

export const WatchtimeTextField = BaseTextField.extend `
	display: inline-block;

	input {
		width: 4em;
		margin-left: .25em; 
		margin-right: .25em; 
	}
`

export const SaveButton = styled.button `
	color: green;
`

export const DeleteButton = styled.button `
	color: red;
`