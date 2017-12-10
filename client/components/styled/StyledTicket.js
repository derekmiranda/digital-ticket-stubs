import styled from 'styled-components'

import Ticket from 'components/Ticket'
import {
	forMobile,
	forDesktop,
} from 'client/utils/styleUtils';
import { renderTextField } from '../Ticket/TicketComponents';

const shadowDist = 2;
const width = 400;
const height = 225;
const mobileWidth = 320;
const mobileHeight = 180;

const StyledTicket = styled(Ticket)`
	box-sizing: border-box;

	${forMobile(`
		width: 100%;
		height: 0;
		padding-bottom: 56.25%;
		background-size: 100% auto;
		margin: 0;
		margin-bottom: 2em;
	`)}

	${forDesktop(`
		width: ${width}px;
		height: ${height}px;
		background-size: ${width}px ${height}px;
		margin: 20px;
		padding: 10px;
	`)}

	outline: .25em solid rgba(0,0,0,0.5);
	opacity: ${props => props.viewing.id ? 1 : .75};
	background-color: rgba(0,0,0,0);
	background-image: url("assets/ticket.png");
	background-position: center;
	background-repeat: no-repeat;
	display: inline-block;	
	box-shadow: ${shadowDist}px ${shadowDist}px 10px #888888;
	font-size: 80%;

	h1 {
		margin-top: 0;
		margin-bottom: 0;
	}
`

export default StyledTicket

export const BaseTextField = styled(renderTextField)`
	display: inline-block;

	input {
		background-color: rgba(0,0,0,0);
		border: 0;
		border-bottom: 1px solid black;
		margin: 0 1em 0 1em;
	}
`

export const WatchtimeTextField = BaseTextField.extend`
	input {
		width: 4em;
		margin-left: .25em; 
		margin-right: .25em; 
	}
`