import styled from 'styled-components'

import Ticket from 'components/Ticket'
import {
	forMobile,
	forTablet,
	forDesktop,
} from 'client/utils/styleUtils';
import { ticketFonts, fontFace } from 'constants'

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
	${fontFace}
	${generateVwDims(forMobile, 80)}
	${generateVwDims(forTablet, 40)}
	${generateVwDims(forDesktop, 27)}
	
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
	margin: 0;
	padding: .5em 1em;
	
	font-family: ${ticketFonts};
	outline: .25em solid rgba(0,0,0,0.5);
	opacity: ${props => props.viewing.id ? 1 : .75};
	background-color: rgba(0,0,0,0);
	background-image: url("assets/ticket.png");
	background-position: center;
	background-repeat: no-repeat;
	box-shadow: ${shadowDist}px ${shadowDist}px 20px rgba(0,0,0,0.5);

`

export default StyledTicket