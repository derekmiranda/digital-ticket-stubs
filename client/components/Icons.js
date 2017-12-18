import React from 'react'
import styled from 'styled-components'
import SvgInline from 'svg-inline-react'

import xSvg from 'assets/x.svg'

const length = '2rem'

const BaseContainer = styled.span`
	display: inline-block;
	position: absolute;
	right: 0;
	height: 2rem;
	width: 2rem;

	&:hover {
		&::after {
			position: absolute;
			color: red;
			content: "${props => props.msg}";
			margin: auto .3rem;
			z-index: 100;
		}
	}
`

const ErrorContainer = BaseContainer.extend`
	height: 2rem;
	width: 2rem;
`

const ErrorSvg = styled(SvgInline)`
	* {
		fill: red;
	}
`

export const ErrorMsg = ({ msg }) => (
	<ErrorContainer msg={msg}>
   	<ErrorSvg src={xSvg} />
	</ErrorContainer>
)