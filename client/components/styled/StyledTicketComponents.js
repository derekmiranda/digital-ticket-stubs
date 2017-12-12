import styled from 'styled-components'

import {
	forMobile,
	forDesktop,
} from 'client/utils/styleUtils';
import { renderTextField } from '../Ticket/TicketComponents';
import { ticketMargin, mainTextColor, ticketFonts, fontFace } from 'client/constants'

export const BaseTextField = styled(renderTextField)`
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

const line = `
	&::after {
		content: '';
		margin: 0 auto;
		display: block;
		width: 100%;
		height: 1px;
		background-color: black;
	}
`
	
export const VenueField = BaseTextField.extend`
	${line}

	input {
		font-size: 1em;
		margin: ${ticketMargin} 0;
	}
`

export const TitleField = BaseTextField.extend`
	input {
		font-size: 1.5em;
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

export const SaveButton = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	color: green;

`