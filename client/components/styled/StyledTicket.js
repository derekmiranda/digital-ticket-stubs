import styled from 'styled-components'

import Ticket from 'components/Ticket'
import {
	forMobile,
	forDesktop,
} from 'client/utils/styleUtils';

const shadowDist = 5;
const width = 400;
const height = 225;
const mobileWidth = 320;
const mobileHeight = 180;

const StyledTicket = styled(Ticket)`
	box-sizing: border-box;
	width: 100%;
	margin: 0;

	/* 
		Aspect ratio using pseudo elements
	*/
	&::before {
		content: "";
		width: 1px;
		margin-left: -1px;
		float: left;
		height: 0;
		padding-top: 56.25%;
	}
	
	&::after { /* to clear float */
		content: "";
		display: table;
		clear: both;
	}

	outline: .25em solid rgba(0,0,0,0.5);
	opacity: ${props => props.viewing.id ? 1 : .75};
	background-color: rgba(0,0,0,0);
	background-image: url("assets/ticket.png");
	background-position: center;
	background-repeat: no-repeat;
	display: inline-block;	
	box-shadow: ${shadowDist}px ${shadowDist}px 20px rgba(0,0,0,0.5);
	font-size: 80%;
`

export default StyledTicket