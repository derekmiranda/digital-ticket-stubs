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
	hoverTextColor,
	ticketFonts,
	fontFace,
	line,
} from 'client/constants'

export const BaseTextField = styled(renderTextField)
`
	${fontFace}

	input {
		box-sizing: border-box;
		font-family: ${ticketFonts};
		color: ${mainTextColor};
		text-align: center;
		background-color: rgba(0,0,0,0);
		border: 0;
		outline: 0;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	input:focus {
		color: ${hoverTextColor};
	}
`

export const VenueField = BaseTextField.extend `
	input {
		width: 80%;
		font-size: 1em;
		margin: ${ticketMargin} 0;
	}

	&::after {
		${line}
	}
`

export const TitleField = BaseTextField.extend `
	input {
		width: 90%;
		font-size: 2em;
		margin: ${ticketMargin} 0;
	}
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