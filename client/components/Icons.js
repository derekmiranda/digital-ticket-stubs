import React from 'react'
import styled from 'styled-components'
import SvgInline from 'svg-inline-react'

import xSvg from 'assets/x.svg'

const length = '2rem'
const errorColor = 'red'
const warnColor = 'goldenrod'

const BaseContainer = styled.span`
	display: inline-block;
	position: absolute;
	height: 2rem;
	width: 2rem;

	&:hover::after {
		position: absolute;
		content: "${props => props.msg}";
		margin: auto .3rem;
	}
`

const createAfterMsg = (color) => `
	&:hover::after {
		color: ${color};
	}

	&:active::after {
		color: ${color};
	}
`

const ErrorContainer = BaseContainer.extend`
	right: 0;
	height: 2rem;
	width: 2rem;

	${createAfterMsg(errorColor)}	
`

const ErrorSvg = styled(SvgInline)`
	* {
		fill: ${errorColor};
	}
`

export const ErrorMsg = ({ msg }) => (
	<ErrorContainer msg={msg}>
   	<ErrorSvg src={xSvg} />
	</ErrorContainer>
)

const WarnContainer = BaseContainer.extend`
	height: 1rem;
	width: 1rem;

	${createAfterMsg(warnColor)}
`

const WarnSvg = styled(SvgInline)`
	* {
		fill: ${warnColor};
	}
`

export const WarnMsg = ({ msg }) => (
	<WarnContainer msg={msg}>
   	<WarnSvg src={xSvg} />
	</WarnContainer>
)