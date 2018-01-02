import styled from 'styled-components'

import Ticket from 'components/Ticket'
import {
	forMobile,
	forTablet,
	forDesktop,
} from 'client/utils/styleUtils';
import { getTicketImg } from 'client/utils/imgUtils'
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

const rgbColorWithAlpha = alpha => `rgba(0,255,200,${alpha})`
const gradient = `linear-gradient(${rgbColorWithAlpha(.05)}, ${rgbColorWithAlpha(.3)})`
const bgImg = ({ viewing }) => {
	const { backdropPath } = viewing
	const cssUrl = backdropPath ? `, url(${getTicketImg(backdropPath)})` : ''
	const bg = `
		background-image: ${gradient}, url("assets/ticket.png") ${cssUrl};
		${cssUrl ? 'background-blend-mode: normal, hard-light;' : ''}
	`
	return bg
}

const StyledTicket = styled(Ticket)`
	${fontFace}
	${generateVwDims(forMobile, 80)}
	${generateVwDims(forTablet, 40)}
	${generateVwDims(forDesktop, 27)}

	transform: rotate(${props => props.viewing.rotation}deg) translateZ(0);
	transform-origin: center;
	
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

	${bgImg}
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	box-shadow: ${shadowDist}px ${shadowDist}px 20px rgba(0,0,0,0.5);

`

export default StyledTicket