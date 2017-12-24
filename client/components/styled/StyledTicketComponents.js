import React from 'react'
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
import SearchResultsContainer from 'containers/SearchResultsContainer'

export const BaseTextField = styled(renderTextField)
`
	${fontFace}
	text-align: center;

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

const _TitleField = BaseTextField.extend `
	input {
		width: 90%;
		font-size: 2em;
	}
`

export const TitleField = (props) => {
	const { idx } = props
	return (
		<div style={{ position: 'relative' }}>
			<_TitleField {...props} />
			<SearchResultsContainer idx={idx} />
		</div>
	)
}

export const WatchtimeTextField = BaseTextField.extend `
	display: inline-block;

	input {
		width: 4em;
		margin-left: .25em; 
		margin-right: .25em; 
	}
`

export const BaseButton = styled.button`
	z-index: 1;
`

export const SaveButton = BaseButton.extend`
	color: green;
`

export const DeleteButton = BaseButton.extend`
	color: red;
`