import styled from 'styled-components'

import Ticket from 'components/Ticket'
import {
	forMobile,
	forTablet,
	forDesktop,
} from 'client/utils/styleUtils';

const shadowDist = 5;
const width = 400;
const height = 225;
const mobileWidth = 320;
const mobileHeight = 180;

const generateVwDims = (mediaQueryGen, vwWidth) => mediaQueryGen(`
	width: ${vwWidth}vw;
	height: calc(${vwWidth}vw * 9 / 16);
`)

const StyledTicket = styled(Ticket)`
	box-sizing: border-box;

	${generateVwDims(forMobile, 80)}
	${generateVwDims(forTablet, 40)}
	${generateVwDims(forDesktop, 27)}

	margin: 0;
	margin-bottom: 2em;
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