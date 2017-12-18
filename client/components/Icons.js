import React from 'react'
import styled from 'styled-components'

const length = '2rem'

const Container = styled.span`
	display: inline-block;
	position: absolute;
	right: 0;
	height: 2rem;
	width: 2rem;
`

export const ErrorMsg = (props) => (
	<Container>
   	<img src="assets/x.svg" fill='red' {...props}/>
	</Container>
)